require("../core/core.module");

import { FlyOutComponent } from "./fly-out.component";
import { FlyOutActionCreator } from "./fly-out.actions";
import { FlyOutService } from "./fly-out.service";
import *  as reducers from "./fly-out.reducers";

var app = (<any>angular.module("app.flyOut", [
    "app.core"    
]));

app.service("flyOutActionCreator",["$location","dispatcher","flyOutService","guid",FlyOutActionCreator]);
app.service("flyOutService",["$q","apiEndpoint","fetch",FlyOutService]);
app.component(FlyOutComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
