import { CanActivate, Component } from "../core/component-decorators";

@Component({
    templateUrl: "wwwroot/collection/collection-list.component.html",
	styleUrls: ["wwwroot/collection/collection-list.component.css"],
    selector: "collection-list",
    inputs: ['entities','edit','remove']
})
export class CollectionListComponent {
    constructor() { }     
}
