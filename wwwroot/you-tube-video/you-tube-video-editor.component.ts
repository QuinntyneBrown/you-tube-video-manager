import { CanActivate, Component } from "../core/component-decorators";
import { YouTubeVideoActionCreator } from "./you-tube-video.actions";
import { pluck } from "../core/pluck";

@Component({
    route: "/you-tube-video/edit/:id",
    templateUrl: "wwwroot/you-tube-video/you-tube-video-editor.component.html",
	styleUrls: ["wwwroot/you-tube-video/you-tube-video-editor.component.css"],
    selector: "you-tube-video-editor",
    providers: ["$location","$routeParams","youTubeVideoActionCreator","invokeAsync"],
	inputs:["onSuccess"]
})
@CanActivate(["$q","$route", "invokeAsync", "youTubeVideoActionCreator", ($q: angular.IQService, $route, invokeAsync, youTubeVideoActionCreator: YouTubeVideoActionCreator) => {
    var id = $route.current.params.id;;
    return $q.all([
        invokeAsync({ action: youTubeVideoActionCreator.getById, params: { id: id } }),
        invokeAsync(youTubeVideoActionCreator.all)
    ]);
}])
export class YouTubeVideoEditorComponent {
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private youTubeVideoActionCreator: YouTubeVideoActionCreator, private invokeAsync) { }

	storeOnChange = state => { this.entities = state.youTubeVideos; }

	ngOnInit = () => {
        if (this.$routeParams["id"]) {
            this.entity = pluck({ value: Number(this.$routeParams["id"]), items: this.entities });
        } else {
            this.entity = {};
        }
    }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.youTubeVideoActionCreator.addOrUpdate,
            params: {
                data: this.entity
            }
        }).then(() => { 
			this.youTubeVideoActionCreator.addOrUpdateSuccess({ entity: this.entity });		
			this.entity = {}; 
		});
    } 
    
    create = () => { this.youTubeVideoActionCreator.create(); }

    remove = () => this.youTubeVideoActionCreator.remove({ id: this.entity.id });
         
    id;
	name;
	entity;
	entities;
}
