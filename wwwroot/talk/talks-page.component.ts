require("./talks-container.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "./talk.actions";
import { pluck } from "../core/pluck";
import { Talk } from "./talk.model";

@Component({
    routes: ["/admin/talks","/admin/talk/edit/:talkId"],
    templateUrl: "wwwroot/talk/talks-page.component.html",
    styleUrls: ["wwwroot/talk/talks-page.component.css"],
    selector: "talks-page",
    providers: ["$location","$routeParams","talkActionCreator"]
})
@CanActivate(["$q", "$route", "invokeAsync", "talkActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, talkActionCreator: actions.TalkActionCreator) => {
    var talkId = $route.current.params.talkId;
    var promises = [invokeAsync(talkActionCreator.all)];
    if (talkId) { promises.push(invokeAsync({ action: talkActionCreator.getById, params: { id: talkId } })) };
    return $q.all(promises);
}])
export class TalksPageComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private talkActionCreator: actions.TalkActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.talks;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentTalkAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/talks");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentTalkAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/talk/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveTalkAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["talkId"]), items: this.entities }) as Talk;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/talks"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["talkId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["talkId"]), items: this.entities }) as Talk;
        } else {
            this.entity = new Talk();
        }
    }

    edit = entity => this.talkActionCreator.edit(entity);
    remove = entity => this.talkActionCreator.remove(entity);
    create = entity => this.talkActionCreator.create();
    addOrUpdate = options => this.talkActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
