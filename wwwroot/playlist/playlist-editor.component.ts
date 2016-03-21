import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/playlist/playlist-editor.component.html",
	styleUrls: ["wwwroot/playlist/playlist-editor.component.css"],
    selector: "playlist-editor",
    inputs: ['entity','addOrUpdate','remove','create']
})
export class PlaylistEditorComponent {}


