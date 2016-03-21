import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { TabsActionCreator } from "./tabs.actions";

@Component({
    templateUrl: "wwwroot/tabs/tab-content.component.html",
    selector: "tab-content",
    transclude: true,
    providers: ["tabsActionCreator"]
})
export class TabContentComponent {
    constructor(private tabsActionCreator: TabsActionCreator) { }
    storeOnChange = state => { }
    ngOnInit = () => this.tabsActionCreator.tabChildLoaded();
}