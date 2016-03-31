require("./technology.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { TechnologyActionCreator } from "./technology.actions";

@Component({
    templateUrl: "wwwroot/technology/technology.component.html",
	styleUrls: ["wwwroot/technology/technology.component.css"],
    selector: "technology",
    viewProviders: ["technologyActionCreator"]
})
export class TechnologyComponent {
    constructor(private technologyActionCreator: TechnologyActionCreator) { }
  
}
