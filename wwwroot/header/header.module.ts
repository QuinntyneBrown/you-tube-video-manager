require("../core/core.module");

import { HeaderComponent } from "./header.component";
import { HeaderActionCreator } from "./header.actions";
import { HeaderService } from "./header.service";
import *  as reducers from "./header.reducers";

var app = (<any>angular.module("app.header", [
    "app.core"    
]));

app.service("headerActionCreator",["$location","dispatcher","headerService","guid",HeaderActionCreator]);
app.service("headerService",["$q","apiEndpoint","fetch",HeaderService]);
app.component(HeaderComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
