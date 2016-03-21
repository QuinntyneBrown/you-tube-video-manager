import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "./tag.actions";
import { pluck } from "../core/pluck";
import { Tag } from "./tag.model";

@Component({
    routes: ["/admin/tags","/admin/tag/edit/:tagId"],
    templateUrl: "wwwroot/tag/tags-page.component.html",
    styleUrls: ["wwwroot/tag/tags-page.component.css"],
    selector: "tags-page",
    providers: ["$location","$routeParams","tagActionCreator"]
})
@CanActivate(["$q", "$route", "invokeAsync", "tagActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, tagActionCreator: actions.TagActionCreator) => {
    var tagId = $route.current.params.tagId;
    var promises = [invokeAsync(tagActionCreator.all)];
    if (tagId) { promises.push(invokeAsync({ action: tagActionCreator.getById, params: { id: tagId } })) };
    return $q.all(promises);
}])
export class TagsPageComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private tagActionCreator: actions.TagActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.tags;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentTagAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/tags");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentTagAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/tag/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveTagAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["tagId"]), items: this.entities }) as Tag;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/tags"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["tagId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["tagId"]), items: this.entities }) as Tag;
        } else {
            this.entity = new Tag();
        }
    }

    edit = entity => this.tagActionCreator.edit(entity);
    remove = entity => this.tagActionCreator.remove(entity);
    create = entity => this.tagActionCreator.create();
    addOrUpdate = options => this.tagActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
