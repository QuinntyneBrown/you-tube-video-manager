require("./technology-list.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/technology/technology-list.component.html",
	styleUrls: ["wwwroot/technology/technology-list.component.css"],
    selector: "technology-list",
    inputs: ['entities','edit','remove']
})
export class TechnologyListComponent {
    constructor() { }     
}
