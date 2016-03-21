require("./profile.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { ProfileActionCreator } from "./profile.actions";

@Component({
    templateUrl: "wwwroot/profile/profile.component.html",
	styleUrls: ["wwwroot/profile/profile.component.css"],
    selector: "profile",
    providers: ["profileActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
    constructor(private profileActionCreator: ProfileActionCreator) { }
  
}
