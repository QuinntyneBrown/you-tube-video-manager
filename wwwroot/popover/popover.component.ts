require("./popover.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { PopoverActionCreator } from "./popover.actions";

@Component({
    templateUrl: "wwwroot/popover/popover.component.html",
	styleUrls: ["wwwroot/popover/popover.component.css"],
    selector: "popover",
    viewProviders: ["popoverActionCreator"]
})
export class PopoverComponent {
    constructor(private popoverActionCreator: PopoverActionCreator) { }
  
}
