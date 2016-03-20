require("./speakers-page.component.css");

import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./speaker.actions";
import { pluck } from "../core/pluck";
import { Speaker } from "./speaker.model";

@Component({
    routes: ["/admin/speakers","/admin/speaker/edit/:speakerId"],
    templateUrl: "wwwroot/speaker/speakers-page.component.html",
    styleUrls: ["wwwroot/speaker/speakers-page.component.css"],
    selector: "speakers-page",
    providers: ["$location","$routeParams","speakerActionCreator"]
})
@CanActivate(["$q", "$route", "invokeAsync", "speakerActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, speakerActionCreator: actions.SpeakerActionCreator) => {
    var speakerId = $route.current.params.speakerId;
    var promises = [invokeAsync(speakerActionCreator.all)];
    if (speakerId) { promises.push(invokeAsync({ action: speakerActionCreator.getById, params: { id: speakerId } })) };
    return $q.all(promises);
}])
export class SpeakersPageComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private speakerActionCreator: actions.SpeakerActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.speakers;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentSpeakerAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/speakers");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentSpeakerAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/speaker/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveSpeakerAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["speakerId"]), items: this.entities }) as Speaker;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/speakers"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["speakerId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["speakerId"]), items: this.entities }) as Speaker;
        } else {
            this.entity = new Speaker();
        }
    }

    edit = entity => this.speakerActionCreator.edit(entity);
    remove = entity => this.speakerActionCreator.remove(entity);
    create = entity => this.speakerActionCreator.create();
    addOrUpdate = options => this.speakerActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
