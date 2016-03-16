

export interface IRouteResolverServiceProvider extends ng.IServiceProvider {

    configure(routePromise: IRoutePromise);

    /**
    * get route promises ordered by priority (ASC)
    * priority 1 runs before priority 10
    */
    routePromises: Array<IRoutePromise>;

    /**
    * Reduce RoutePromises into prioritized groups
    * Put the route promises with the same priority in the same group
    * Eventually will be resolve together asynchronously with $q.all
    */
    reduceRoutePromisesByPriority(routePromises: IRoutePromise[]): Array<IRoutePromisesPrioritizedGroup>;
}

/**
* @name IRouteResolverService
* @module App.Common
*/
export interface IRouteResolverService {
    resolve(routeName: string): ng.IPromise<any>;
}

/**
* @name IRoutePromise
* @module App.Common
*/
export interface IRoutePromise {
    priority?: number;
    route?: string;
    promise: any;
    key?: string;
    routes?: Array<string>;
}

/**
* @name IRoutePromiseInstanceOptions
* @module App.Common
*/
export interface IRoutePromiseInstanceOptions {

}

/**
* @name IRoutePromisesPrioritizedGroup
* @module App.Common
*/
export interface IRoutePromisesPrioritizedGroup {
    promises: IRoutePromise[];
    priority: number;
    isLast: boolean;
}

class RouteResolverServiceProvider implements IRouteResolverServiceProvider {

    public configure = (routePromise: IRoutePromise) => { this._routePromises.push(routePromise); }

    public $get = ["$injector", "$q", ($injector: ng.auto.IInjectorService, $q: ng.IQService) => {
        return {
            resolve: (routeName: string, routeParams?: ng.route.IRouteParamsService) => {
                this.routeParams = routeParams;
                var deferred = $q.defer();
                var resolvedRouteData: any = {};
                var routePromises = this.getRoutePromisesByRouteName(routeName);

                if (routePromises.length < 1)
                    return $q.when(true);

                var prioritizedGroups = this.reduceRoutePromisesByPriority(routePromises);

                this.invoke($injector, $q, prioritizedGroups, 0, () => {
                    deferred.resolve(resolvedRouteData);
                }, resolvedRouteData);

                return deferred.promise;
            }
        }
    }
    ];

    /* @internal */
    private _routePromises: Array<IRoutePromise> = [];

    private routeParams: any;

    /**
     * get route promises ordered by priority (ASC)
     * priority 1 runs before priority 10
     */
    public get routePromises() {
        return this._routePromises.sort((a: IRoutePromise, b: IRoutePromise) => {
            return a.priority - b.priority;
        });
    }

    /**
    * @name getRoutePromisesByRouteName
    * @description the route promises that will be resolved on an route
    * if the value of the route key matches the route definition '/foo/{id}' or '/foos'
    * include that routePromises
    * if they is no specific route mention, it's assumed you want that promise to be resolved on
    * every route
    */
    private getRoutePromisesByRouteName = (route: string) => {
        return this._routePromises.filter((routePromise: IRoutePromise) => {
            if (routePromise.route)
                return routePromise.route === route;

            if (routePromise.routes)
                return routePromise.routes.indexOf(route) > -1;

            return true;
        });
    }

    /**
     * Reduce RoutePromises into prioritized groups
     * Put the route promises with the same priority in the same group
     * Eventually will be resolve together asynchronously with $q.all
     */
    public reduceRoutePromisesByPriority = (routePromises: IRoutePromise[]) => {
        var priorities: Array<number> = [];
        var routePromisesPrioritizedGroups: Array<any> = [];

        routePromises.forEach((promise) => {
            if (priorities.indexOf(promise.priority) < 0)
                priorities.push(promise.priority);
        });

        priorities.forEach((priority: number, index: number) => {
            routePromisesPrioritizedGroups.push({
                promises: routePromises.filter((promise) => { return promise.priority == priority; }),
                priority: priority,
                isLast: index == priorities.length - 1
            });
        });
        return routePromisesPrioritizedGroups;
    }

    /**
     * Invoke the grouped promises. Reducing the results into the resolvedRouteData object
     * If the route promise inside the group has a key defined, the result will be attached to the 
     * resolved object (routeData) using that key
     * After you reach the last group, call the callback that will resolve the object that 
     * will have a key value dictionary with the results of any promises with a key defined
     */
    public invoke = ($injector: ng.auto.IInjectorService, $q: ng.IQService, groups: IRoutePromisesPrioritizedGroup[], currentGroupIndex: number, callback: any, resolvedRouteData: any) => {
        var excutedPromises: Array<any> = [];
        var currentGroup = groups[currentGroupIndex];

        currentGroup.promises.forEach((statePromise: IRoutePromise) => {
            excutedPromises.push($injector.invoke(statePromise.promise));
        });

        $q.all(excutedPromises).then((results) => {
            results.forEach((result, index) => {
                if (currentGroup.promises[index].key)
                    resolvedRouteData[currentGroup.promises[index].key] = results[index];
            });
            currentGroup.isLast ? callback() : this.invoke($injector, $q, groups, currentGroupIndex + 1, callback, resolvedRouteData);
        });
    }
}
angular.module("routeResolver",[])
    .provider("routeResolverService", [RouteResolverServiceProvider]);