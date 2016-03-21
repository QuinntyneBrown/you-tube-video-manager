import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "./feedback.actions";
import { pluck } from "../core/pluck";
import { Feedback } from "./feedback.model";

@Component({
    routes: ["/admin/feedbacks","/admin/feedback/edit/:feedbackId"],
    templateUrl: "wwwroot/feedback/feedbacks-page.component.html",
    styleUrls: ["wwwroot/feedback/feedbacks-page.component.css"],
    selector: "feedbacks-page",
    providers: ["$location","$routeParams","feedbackActionCreator"]
})
@CanActivate(["$q", "$route", "invokeAsync", "feedbackActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, feedbackActionCreator: actions.FeedbackActionCreator) => {
    var feedbackId = $route.current.params.feedbackId;
    var promises = [invokeAsync(feedbackActionCreator.all)];
    if (feedbackId) { promises.push(invokeAsync({ action: feedbackActionCreator.getById, params: { id: feedbackId } })) };
    return $q.all(promises);
}])
export class FeedbacksPageComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private feedbackActionCreator: actions.FeedbackActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.feedbacks;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentFeedbackAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/feedbacks");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentFeedbackAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/feedback/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveFeedbackAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["feedbackId"]), items: this.entities }) as Feedback;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/feedbacks"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["feedbackId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["feedbackId"]), items: this.entities }) as Feedback;
        } else {
            this.entity = new Feedback();
        }
    }

    edit = entity => this.feedbackActionCreator.edit(entity);
    remove = entity => this.feedbackActionCreator.remove(entity);
    create = entity => this.feedbackActionCreator.create();
    addOrUpdate = options => this.feedbackActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
