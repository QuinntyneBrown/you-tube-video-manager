require("./profile-settings-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./profile-setting.actions";
import { pluck } from "../core/pluck";
import { ProfileSetting } from "./profile-setting.model";

@Component({
    routes: ["/admin/profilesettings","/admin/profilesetting/edit/:profileSettingId"],
    templateUrl: "wwwroot/profile-setting/profile-settings-container.component.html",
    styleUrls: ["wwwroot/profile-setting/profile-settings-container.component.css"],
    selector: "profile-settings-container",
    providers: ["$location","$routeParams","profileSettingActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "profileSettingActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, profileSettingActionCreator: actions.ProfileSettingActionCreator) => {
    var profileSettingId = $route.current.params.profileSettingId;
    var promises = [invokeAsync(profileSettingActionCreator.all)];
    if (profileSettingId) { promises.push(invokeAsync({ action: profileSettingActionCreator.getById, params: { id: profileSettingId } })) };
    return $q.all(promises);
}])
export class ProfileSettingsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private profileSettingActionCreator: actions.ProfileSettingActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.profileSettings;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentProfileSettingAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/profilesettings");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentProfileSettingAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/profilesetting/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveProfileSettingAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["profileSettingId"]), items: this.entities }) as ProfileSetting;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/profilesettings"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["profileSettingId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["profileSettingId"]), items: this.entities }) as ProfileSetting;
        } else {
            this.entity = new ProfileSetting();
        }
    }

    edit = entity => this.profileSettingActionCreator.edit(entity);
    remove = entity => this.profileSettingActionCreator.remove(entity);
    create = entity => this.profileSettingActionCreator.create();
    addOrUpdate = options => this.profileSettingActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
