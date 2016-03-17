import { CanActivate, Component } from "../core/component-decorators";

@Component({
    templateUrl: "wwwroot/you-tube-video/you-tube-video-editor.component.html",
	styleUrls: ["wwwroot/you-tube-video/you-tube-video-editor.component.css"],
    selector: "you-tube-video-editor",
    inputs: ['entity', 'addOrUpdate','remove','create']
})
export class YouTubeVideoEditorComponent {
    tagEntity = {};

    addOrUpdateTag = options => {
        this.entity.tags.push(options.data);
        console.log(JSON.stringify(this.entity.tags));
        this.tagEntity = {};
    }
    entity;
}
