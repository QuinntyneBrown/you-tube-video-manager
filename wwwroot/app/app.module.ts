require("../core/core.module");
require("../router-outlet/router-outlet.module");

import { AppComponent } from "./app.component";
import { AppActionCreator } from "./app.actions";
import { AppService } from "./app.service";
import *  as reducers from "./app.reducers";

var app = (<any>angular.module("app.app", [
    "app.core",
    "app.routerOutlet", 
]));

app.service("appActionCreator",["$location","dispatcher","appService","guid",AppActionCreator]);
app.service("appService",["$q","apiEndpoint","fetch",AppService]);
app.component(AppComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
