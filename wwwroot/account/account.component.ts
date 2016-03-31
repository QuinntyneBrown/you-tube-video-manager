require("./account.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { AccountActionCreator } from "./account.actions";

@Component({
    templateUrl: "wwwroot/account/account.component.html",
	styleUrls: ["wwwroot/account/account.component.css"],
    selector: "account",
    viewProviders: ["accountActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent {
    constructor(private accountActionCreator: AccountActionCreator) { }
  
}
