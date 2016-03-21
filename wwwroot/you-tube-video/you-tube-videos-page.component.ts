import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "./you-tube-video.actions";
import { pluck } from "../core/pluck";
import { YouTubeVideo } from "./you-tube-video.model";

@Component({
    routes: ["/admin/youtubevideos","/admin/youTubeVideo/edit/:youTubeVideoId"],
    templateUrl: "wwwroot/you-tube-video/you-tube-videos-page.component.html",
    styleUrls: ["wwwroot/you-tube-video/you-tube-videos-page.component.css"],
    selector: "you-tube-videos-page",
    providers: ["$location","$routeParams","youTubeVideoActionCreator"]
})
@CanActivate(["$q", "$route", "invokeAsync", "youTubeVideoActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, youTubeVideoActionCreator: actions.YouTubeVideoActionCreator) => {
    var youTubeVideoId = $route.current.params.youTubeVideoId;
    var promises = [invokeAsync(youTubeVideoActionCreator.all)];
    if (youTubeVideoId) { promises.push(invokeAsync({ action: youTubeVideoActionCreator.getById, params: { id: youTubeVideoId } })) };
    return $q.all(promises);
}])
export class YouTubeVideosPageComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private youTubeVideoActionCreator: actions.YouTubeVideoActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.youTubeVideos;

        if (state.lastTriggeredByAction instanceof actions.SetCurrentYouTubeVideoAction) 
            this.$location.path("/admin/youtubevideo/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveYouTubeVideoAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["youTubeVideoId"]), items: this.entities }) as YouTubeVideo;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/youtubevideos"); }
        }

        if (state.lastTriggeredByAction instanceof actions.AddOrUpdateYouTubeVideoAction && !this.entity.id)
            this.entity = new YouTubeVideo();       

        if (state.lastTriggeredByAction instanceof actions.AddOrUpdateYouTubeVideoAction && this.entity.id)
            this.$location.path("/admin/youtubevideos");
    }

    ngOnInit = () => {
        if (this.$routeParams["youTubeVideoId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["youTubeVideoId"]), items: this.entities }) as YouTubeVideo;
        } else {
            this.entity = new YouTubeVideo();
        }
    }

    addOrUpdateTag = options => {
        alert("?");
    } 

    edit = entity => this.youTubeVideoActionCreator.edit(entity);
    remove = entity => this.youTubeVideoActionCreator.remove(entity);
    create = entity => this.youTubeVideoActionCreator.create();
    addOrUpdate = options => this.youTubeVideoActionCreator.addOrUpdate({ data: options.data });

    tagEntity = {};
    entity: YouTubeVideo;
    entities;
}
