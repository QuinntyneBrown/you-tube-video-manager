import { CanActivate, Component } from "../core/component-decorators";

@Component({
    templateUrl: "wwwroot/playlist/playlist-list.component.html",
	styleUrls: ["wwwroot/playlist/playlist-list.component.css"],
    selector: "playlist-list",
    inputs: ['entities','edit','remove']
})
export class PlaylistListComponent {
    constructor() { }     
}
