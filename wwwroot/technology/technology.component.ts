require("./technology.component.css");

import { CanActivate, Component } from "../core/component-decorators";
import { TechnologyActionCreator } from "./technology.actions";

@Component({
    templateUrl: "wwwroot/technology/technology.component.html",
	styleUrls: ["wwwroot/technology/technology.component.css"],
    selector: "technology",
    providers: ["technologyActionCreator"]
})
export class TechnologyComponent {
    constructor(private technologyActionCreator: TechnologyActionCreator) { }
  
}
