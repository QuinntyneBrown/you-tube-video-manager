require("./photo-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/photo/photo-list.component.html",
	styleUrls: ["wwwroot/photo/photo-list.component.css"],
    selector: "photo-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoListComponent {
    constructor() { }     
}
