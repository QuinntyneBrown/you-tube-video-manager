require("./account-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/account/account-list.component.html",
	styleUrls: ["wwwroot/account/account-list.component.css"],
    selector: "account-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountListComponent {
    constructor() { }     
}
