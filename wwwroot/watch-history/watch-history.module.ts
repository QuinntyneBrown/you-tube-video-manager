require("../core/core.module");

import { WatchHistoryEditorComponent } from "./watch-history-editor.component";
import { WatchHistoryListComponent } from "./watch-history-list.component";
import { WatchHistoryComponent } from "./watch-history.component";
import { WatchHistorysContainerComponent } from "./watch-historys-container.component";
import { WatchHistoryActionCreator } from "./watch-history.actions";
import { WatchHistoryService } from "./watch-history.service";
import *  as reducers from "./watch-history.reducers";

var app = (<any>angular.module("app.watchHistory", [
    "app.core"    
]));

app.service("watchHistoryActionCreator",["$location","dispatcher","watchHistoryService","guid",WatchHistoryActionCreator]);
app.service("watchHistoryService",["$q","apiEndpoint","fetch",WatchHistoryService]);
app.component(WatchHistoryEditorComponent);
app.component(WatchHistoryListComponent);
app.component(WatchHistoryComponent);
app.component(WatchHistorysContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
