import { CanActivate, Component } from "../core/component-decorators";
import { CollectionActionCreator } from "./collection.actions";

@Component({
    templateUrl: "wwwroot/collection/collection.component.html",
	styleUrls: ["wwwroot/collection/collection.component.css"],
    selector: "collection",
    providers: ["collectionActionCreator"]
})
export class CollectionComponent {
    constructor(private collectionActionCreator: CollectionActionCreator) { }
  
}
