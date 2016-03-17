import { CanActivate, Component } from "../core/component-decorators";

@Component({
    templateUrl: "wwwroot/you-tube-video/you-tube-video-editor.component.html",
	styleUrls: ["wwwroot/you-tube-video/you-tube-video-editor.component.css"],
    selector: "you-tube-video-editor",
    inputs: ['entity','addOrUpdate','remove','create']
})
export class YouTubeVideoEditorComponent {}
