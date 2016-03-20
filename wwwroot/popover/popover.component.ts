require("./popover.component.css");

import { CanActivate, Component } from "../core/component-decorators";
import { PopoverActionCreator } from "./popover.actions";

@Component({
    templateUrl: "wwwroot/popover/popover.component.html",
	styleUrls: ["wwwroot/popover/popover.component.css"],
    selector: "popover",
    providers: ["popoverActionCreator"]
})
export class PopoverComponent {
    constructor(private popoverActionCreator: PopoverActionCreator) { }
  
}
