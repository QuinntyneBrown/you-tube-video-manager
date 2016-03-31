require("./fly-out.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { FlyOutActionCreator } from "./fly-out.actions";

@Component({
    templateUrl: "wwwroot/fly-out/fly-out.component.html",
	styleUrls: ["wwwroot/fly-out/fly-out.component.css"],
    selector: "fly-out",
    viewProviders: ["flyOutActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlyOutComponent {
    constructor(private flyOutActionCreator: FlyOutActionCreator) { }
  
}
