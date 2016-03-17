import { CanActivate, Component } from "../core/component-decorators";
import { YouTubeVideoActionCreator } from "./you-tube-video.actions";

@Component({
    route: "/youTubeVideo/list",
    templateUrl: "wwwroot/you-tube-video/you-tube-video-list.component.html",
	styleUrls: ["wwwroot/you-tube-video/you-tube-video-list.component.css"],
    selector: "you-tube-video-list",
    inputs: ['entities', 'cbEdit','cbRemove']
})
export class YouTubeVideoListComponent {
    constructor() { }     
    entities;
    remove = entity => this.cbRemove({ entity: entity });
    edit = entity => this.cbEdit({ entity: entity }); 
     
    cbEdit;
    cbRemove;  
}
