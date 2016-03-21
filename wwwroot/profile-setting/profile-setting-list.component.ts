require("./profile-setting-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/profile-setting/profile-setting-list.component.html",
	styleUrls: ["wwwroot/profile-setting/profile-setting-list.component.css"],
    selector: "profile-setting-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSettingListComponent {
    constructor() { }     
}
