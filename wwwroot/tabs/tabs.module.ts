require("../core/core.module");

import { TabContentComponent } from "./tab-content.component";
import { TabTitleComponent } from "./tab-title.component";
import { TabsComponent } from "./tabs.component";
import { TabsActionCreator } from "./tabs.actions";
import { TabsService } from "./tabs.service";
import * as reducers from "./tabs.reducers";

var app = (<any>angular.module("app.tabs", [
    "app.core"
]));

app.service("tabsActionCreator",["$location","dispatcher","tabsService","guid",TabsActionCreator]);
app.service("tabsService",["$q","apiEndpoint","fetch",TabsService]);
app.component(TabContentComponent);
app.component(TabTitleComponent);
app.component(TabsComponent);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.setCurrentTabReducer);
    reducersProvider.configure(reducers.tabChildLoadedReducer);
}]);

app.config(["initialStateProvider", "localStorageManagerProvider", (initialStateProvider, localStorageManagerProvider) => {
    var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
    if (!localStorageInitialState)
        localStorageManagerProvider.put({
            name: "initialState", value: {
                tabIndex: {}
            }
        });
    var initialState = localStorageManagerProvider.get({ name: "initialState" });

    initialState.tabIndex = initialState.tabIndex || {};

    initialStateProvider.configure(initialState);
}]);