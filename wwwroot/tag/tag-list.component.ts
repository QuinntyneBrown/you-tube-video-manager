import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/tag/tag-list.component.html",
	styleUrls: ["wwwroot/tag/tag-list.component.css"],
    selector: "tag-list",
    inputs: ['entities','edit','remove']
})
export class TagListComponent {
    constructor() { }     
}
