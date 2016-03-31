require("./watch-historys-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./watch-history.actions";
import { pluck } from "../core/pluck";
import { WatchHistory } from "./watch-history.model";

@Component({
    routes: ["/admin/watchhistorys","/admin/watchhistory/edit/:watchHistoryId"],
    templateUrl: "wwwroot/watch-history/watch-historys-container.component.html",
    styleUrls: ["wwwroot/watch-history/watch-historys-container.component.css"],
    selector: "watch-historys-container",
    viewProviders: ["$location","$routeParams","watchHistoryActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "watchHistoryActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, watchHistoryActionCreator: actions.WatchHistoryActionCreator) => {
    var watchHistoryId = $route.current.params.watchHistoryId;
    var promises = [invokeAsync(watchHistoryActionCreator.all)];
    if (watchHistoryId) { promises.push(invokeAsync({ action: watchHistoryActionCreator.getById, params: { id: watchHistoryId } })) };
    return $q.all(promises);
}])
export class WatchHistorysContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private watchHistoryActionCreator: actions.WatchHistoryActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.watchHistorys;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentWatchHistoryAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/watchhistorys");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentWatchHistoryAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/watchhistory/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveWatchHistoryAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["watchHistoryId"]), items: this.entities }) as WatchHistory;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/watchhistorys"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["watchHistoryId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["watchHistoryId"]), items: this.entities }) as WatchHistory;
        } else {
            this.entity = new WatchHistory();
        }
    }

    edit = entity => this.watchHistoryActionCreator.edit(entity);
    remove = entity => this.watchHistoryActionCreator.remove(entity);
    create = entity => this.watchHistoryActionCreator.create();
    addOrUpdate = options => this.watchHistoryActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
