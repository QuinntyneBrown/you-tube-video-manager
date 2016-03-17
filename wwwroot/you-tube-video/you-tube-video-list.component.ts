import { CanActivate, Component } from "../core/component-decorators";

@Component({
    templateUrl: "wwwroot/you-tube-video/you-tube-video-list.component.html",
	styleUrls: ["wwwroot/you-tube-video/you-tube-video-list.component.css"],
    selector: "you-tube-video-list",
    inputs: ['entities','edit','remove']
})
export class YouTubeVideoListComponent {
    constructor() { }     
}
