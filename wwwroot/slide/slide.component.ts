require("./slide.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { SlideActionCreator } from "./slide.actions";

@Component({
    templateUrl: "wwwroot/slide/slide.component.html",
	styleUrls: ["wwwroot/slide/slide.component.css"],
    selector: "slide",
    viewProviders: ["slideActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideComponent {
    constructor(private slideActionCreator: SlideActionCreator) { }
  
}
