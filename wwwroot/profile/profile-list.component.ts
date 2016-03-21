require("./profile-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/profile/profile-list.component.html",
	styleUrls: ["wwwroot/profile/profile-list.component.css"],
    selector: "profile-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileListComponent {
    constructor() { }     
}
