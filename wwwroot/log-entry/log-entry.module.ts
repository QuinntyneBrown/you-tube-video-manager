require("../core/core.module");

import { LogEntryEditorComponent } from "./log-entry-editor.component";
import { LogEntryListComponent } from "./log-entry-list.component";
import { LogEntryComponent } from "./log-entry.component";
import { LogEntrysContainerComponent } from "./log-entrys-container.component";
import { LogEntryActionCreator } from "./log-entry.actions";
import { LogEntryService } from "./log-entry.service";
import *  as reducers from "./log-entry.reducers";

var app = (<any>angular.module("app.logEntry", [
    "app.core"    
]));

app.service("logEntryActionCreator",["$location","dispatcher","logEntryService","guid",LogEntryActionCreator]);
app.service("logEntryService",["$q","apiEndpoint","fetch",LogEntryService]);
app.component(LogEntryEditorComponent);
app.component(LogEntryListComponent);
app.component(LogEntryComponent);
app.component(LogEntrysContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
