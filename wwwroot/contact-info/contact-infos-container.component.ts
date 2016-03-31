require("./contact-infos-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./contact-info.actions";
import { pluck } from "../core/pluck";
import { ContactInfo } from "./contact-info.model";

@Component({
    routes: ["/admin/contactinfos","/admin/contactinfo/edit/:contactInfoId"],
    templateUrl: "wwwroot/contact-info/contact-infos-container.component.html",
    styleUrls: ["wwwroot/contact-info/contact-infos-container.component.css"],
    selector: "contact-infos-container",
    viewProviders: ["$location","$routeParams","contactInfoActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "contactInfoActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, contactInfoActionCreator: actions.ContactInfoActionCreator) => {
    var contactInfoId = $route.current.params.contactInfoId;
    var promises = [invokeAsync(contactInfoActionCreator.all)];
    if (contactInfoId) { promises.push(invokeAsync({ action: contactInfoActionCreator.getById, params: { id: contactInfoId } })) };
    return $q.all(promises);
}])
export class ContactInfosContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private contactInfoActionCreator: actions.ContactInfoActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.contactInfos;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentContactInfoAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/contactinfos");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentContactInfoAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/contactinfo/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveContactInfoAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["contactInfoId"]), items: this.entities }) as ContactInfo;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/contactinfos"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["contactInfoId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["contactInfoId"]), items: this.entities }) as ContactInfo;
        } else {
            this.entity = new ContactInfo();
        }
    }

    edit = entity => this.contactInfoActionCreator.edit(entity);
    remove = entity => this.contactInfoActionCreator.remove(entity);
    create = entity => this.contactInfoActionCreator.create();
    addOrUpdate = options => this.contactInfoActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
