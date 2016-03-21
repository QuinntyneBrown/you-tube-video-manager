import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { PlaylistActionCreator } from "./playlist.actions";

@Component({
    templateUrl: "wwwroot/playlist/playlist.component.html",
	styleUrls: ["wwwroot/playlist/playlist.component.css"],
    selector: "playlist",
    providers: ["playlistActionCreator"]
})
export class PlaylistComponent {
    constructor(private playlistActionCreator: PlaylistActionCreator) { }
  
}
