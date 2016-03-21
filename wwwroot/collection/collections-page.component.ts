import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "./collection.actions";
import { pluck } from "../core/pluck";
import { Collection } from "./collection.model";

@Component({
    routes: ["/admin/collections","/admin/collection/edit/:collectionId"],
    templateUrl: "wwwroot/collection/collections-page.component.html",
    styleUrls: ["wwwroot/collection/collections-page.component.css"],
    selector: "collections-page",
    providers: ["$location","$routeParams","collectionActionCreator"]
})
@CanActivate(["$q", "$route", "invokeAsync", "collectionActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, collectionActionCreator: actions.CollectionActionCreator) => {
    var collectionId = $route.current.params.collectionId;
    var promises = [invokeAsync(collectionActionCreator.all)];
    if (collectionId) { promises.push(invokeAsync({ action: collectionActionCreator.getById, params: { id: collectionId } })) };
    return $q.all(promises);
}])
export class CollectionsPageComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private collectionActionCreator: actions.CollectionActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.collections;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentCollectionAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/collections");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentCollectionAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/collection/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveCollectionAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["collectionId"]), items: this.entities }) as Collection;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/collections"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["collectionId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["collectionId"]), items: this.entities }) as Collection;
        } else {
            this.entity = new Collection();
        }
    }

    edit = entity => this.collectionActionCreator.edit(entity);
    remove = entity => this.collectionActionCreator.remove(entity);
    create = entity => this.collectionActionCreator.create();
    addOrUpdate = options => this.collectionActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
