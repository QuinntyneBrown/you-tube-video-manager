require("./profile-setting.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { ProfileSettingActionCreator } from "./profile-setting.actions";

@Component({
    templateUrl: "wwwroot/profile-setting/profile-setting.component.html",
	styleUrls: ["wwwroot/profile-setting/profile-setting.component.css"],
    selector: "profile-setting",
    viewProviders: ["profileSettingActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSettingComponent {
    constructor(private profileSettingActionCreator: ProfileSettingActionCreator) { }
  
}
