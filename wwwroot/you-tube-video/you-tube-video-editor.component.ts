import { CanActivate, Component } from "../core/component-decorators";
import * as actions from "./you-tube-video.actions";
import { YouTubeVideo } from "./you-tube-video.model";

@Component({
    route: "/you-tube-video/edit/:id",
    templateUrl: "wwwroot/you-tube-video/you-tube-video-editor.component.html",
	styleUrls: ["wwwroot/you-tube-video/you-tube-video-editor.component.css"],
    selector: "you-tube-video-editor",
    inputs: ['entity','cbAddOrUpdate','cbRemove','cbCreate']
})
export class YouTubeVideoEditorComponent {
    constructor() { }    
    addOrUpdate = () => this.cbAddOrUpdate({ data: this.entity });         
    create = () => this.cbCreate();
    remove = () => this.cbRemove({ id: this.entity.id });         
    entity: YouTubeVideo;

    cbCreate;
    cbRemove;
    cbAddOrUpdate;
}
