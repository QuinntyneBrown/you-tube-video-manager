require("./search.component.css");

import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { SearchActionCreator } from "./search.actions";

@Component({
    templateUrl: "wwwroot/search/search.component.html",
	styleUrls: ["wwwroot/search/search.component.css"],
    selector: "search",
    providers: ["searchActionCreator"]
})
export class SearchComponent {
    constructor(private searchActionCreator: SearchActionCreator) { }
  
}
