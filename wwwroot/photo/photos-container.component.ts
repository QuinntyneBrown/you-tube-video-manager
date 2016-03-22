require("./photos-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./photo.actions";
import { pluck } from "../core/pluck";
import { Photo } from "./photo.model";

@Component({
    routes: ["/admin/photos","/admin/photo/edit/:photoId"],
    templateUrl: "wwwroot/photo/photos-container.component.html",
    styleUrls: ["wwwroot/photo/photos-container.component.css"],
    selector: "photos-container",
    providers: ["$location","$routeParams","photoActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "photoActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, photoActionCreator: actions.PhotoActionCreator) => {
    var photoId = $route.current.params.photoId;
    var promises = [invokeAsync(photoActionCreator.all)];
    if (photoId) { promises.push(invokeAsync({ action: photoActionCreator.getById, params: { id: photoId } })) };
    return $q.all(promises);
}])
export class PhotosContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private photoActionCreator: actions.PhotoActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.photos;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentPhotoAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/photos");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentPhotoAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/photo/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemovePhotoAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["photoId"]), items: this.entities }) as Photo;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/photos"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["photoId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["photoId"]), items: this.entities }) as Photo;
        } else {
            this.entity = new Photo();
        }
    }

    edit = entity => this.photoActionCreator.edit(entity);
    remove = entity => this.photoActionCreator.remove(entity);
    create = entity => this.photoActionCreator.create();
    addOrUpdate = options => this.photoActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
