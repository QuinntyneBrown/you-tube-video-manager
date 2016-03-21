import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { TabsActionCreator } from "./tabs.actions";

@Component({
    templateUrl: "wwwroot/tabs/tab-title.component.html",
    selector: "tab-title",
    transclude: true,
    providers: ["$attrs","tabsActionCreator"]
})
export class TabTitleComponent {
    constructor(private $attrs: angular.IAttributes, private tabsActionCreator: TabsActionCreator) { }
    storeOnChange = state => { }
    ngOnInit = () => this.tabsActionCreator.tabChildLoaded();
    onTabTitleClick = () => this.tabsActionCreator.setCurrentTab({
        tabName: (<any>this.$attrs).$$element[0].getAttribute("tabs-name"),
        index: (<any>this.$attrs).$$element[0].getAttribute("index")
    });
}