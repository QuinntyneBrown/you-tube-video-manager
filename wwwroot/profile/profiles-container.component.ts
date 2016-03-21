require("./profiles-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./profile.actions";
import { pluck } from "../core/pluck";
import { Profile } from "./profile.model";

@Component({
    routes: ["/admin/profiles","/admin/profile/edit/:profileId"],
    templateUrl: "wwwroot/profile/profiles-container.component.html",
    styleUrls: ["wwwroot/profile/profiles-container.component.css"],
    selector: "profiles-container",
    providers: ["$location","$routeParams","profileActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "profileActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, profileActionCreator: actions.ProfileActionCreator) => {
    var profileId = $route.current.params.profileId;
    var promises = [invokeAsync(profileActionCreator.all)];
    if (profileId) { promises.push(invokeAsync({ action: profileActionCreator.getById, params: { id: profileId } })) };
    return $q.all(promises);
}])
export class ProfilesContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private profileActionCreator: actions.ProfileActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.profiles;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentProfileAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/profiles");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentProfileAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/profile/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveProfileAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["profileId"]), items: this.entities }) as Profile;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/profiles"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["profileId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["profileId"]), items: this.entities }) as Profile;
        } else {
            this.entity = new Profile();
        }
    }

    edit = entity => this.profileActionCreator.edit(entity);
    remove = entity => this.profileActionCreator.remove(entity);
    create = entity => this.profileActionCreator.create();
    addOrUpdate = options => this.profileActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
