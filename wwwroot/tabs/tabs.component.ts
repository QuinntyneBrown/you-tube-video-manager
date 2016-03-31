import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { TabsActionCreator } from "./tabs.actions";
import * as actions from "./tabs.actions";

@Component({
    templateUrl: "wwwroot/tabs/tabs.component.html",
    selector: "tabs",
    transclude: {
        'title': '?tabTitle',
        'content': '?tabContent'
    },
    viewProviders: [
        '$attrs',
        '$element',
        'tabsActionCreator'
    ]
})
export class TabsComponent {
    constructor(private $attrs: angular.IAttributes, private $element: angular.IAugmentedJQuery, private tabsActionCreator: TabsActionCreator) { }

    storeOnChange = state => {
        this.currentIndex = state.tabIndex[this.$attrs["tabsName"]] || 0;

        if (state.lastTriggeredByAction === actions.SetCurrentTabAction) { this.updateCurrentTab(); }

        if (state.lastTriggeredByAction === actions.TabChildLoadedAction) {
            this._titleElements = angular.element(this.$element[0].querySelectorAll('.tab-title'));
            this._contentElements = angular.element(this.$element[0].querySelectorAll('.tab-content'));
            for (var i = 0; i < this.titleElements.length; i++) {
                this.titleElements[i].setAttribute("index", i.toString());
                this.titleElements[i].setAttribute("tabs-name", this.$attrs["tabsName"]);
            }
            this.updateCurrentTab();
        }
    }

    updateCurrentTab = () => {
        for (var i = 0; i < this.titleElements.length; i++) {
            if (i != this.currentIndex) {
                this.titleElements[i].classList.remove("tabs-titleselected");
            } else {
                this.titleElements[i].classList.add("tabs-titleselected")
            }
        }

        for (var i = 0; i < this.contentElements.length; i++) {
            if (i != this.currentIndex) {
                this.contentElements[i].classList.add("tabs-contentInActive");
            } else {
                this.contentElements[i].classList.remove("tabs-contentInActive")
            }
        }
    }

    _titleElements;
    _contentElements;

    get titleElements() { return this._titleElements; }
    get contentElements() { return this._contentElements; }

    currentIndex = 0;
}