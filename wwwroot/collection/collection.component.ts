import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { CollectionActionCreator } from "./collection.actions";

require("./collection.component.css");

@Component({
    templateUrl: "wwwroot/collection/collection.component.html",
	styleUrls: ["wwwroot/collection/collection.component.css"],
    selector: "collection",
    viewProviders: ["collectionActionCreator"]
})
export class CollectionComponent {
    constructor(private collectionActionCreator: CollectionActionCreator) { }
  
}
