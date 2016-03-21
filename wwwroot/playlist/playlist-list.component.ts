import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/playlist/playlist-list.component.html",
	styleUrls: ["wwwroot/playlist/playlist-list.component.css"],
    selector: "playlist-list",
    inputs: ['entities','edit','remove']
})
export class PlaylistListComponent {
    constructor() { }     
}
