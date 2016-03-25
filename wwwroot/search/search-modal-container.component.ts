require("./search-modal-container.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { IDispatcher } from "../core/store";
import { SearchActionCreator } from "./search.actions";
import * as actions from "../modal/modal.actions";

@Component({
    templateUrl: "wwwroot/search/search-modal-container.component.html",
    styleUrls: ["wwwroot/search/search-modal-container.component.css"],
    selector: "search-modal-container",
    providers: ["dispatcher"]
})
export class SearchModalContainerComponent {
    constructor(private dispatcher: IDispatcher) { }
    close = () => this.dispatcher.dispatch(new actions.CloseModalAction());
}