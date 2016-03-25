import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { CollectionActionCreator } from "./collection.actions";

require("./collections-feature-container.component.css");

@Component({
    templateUrl: "wwwroot/collection/collections-feature-container.component.html",
    styleUrls: ["wwwroot/collection/collections-feature-container.component.css"],
    selector: "collections-feature-container",
    providers: ["collectionActionCreator"]
})
export class CollectionFeatureContainerComponent {
    constructor(private collectionActionCreator: CollectionActionCreator) { }

}
