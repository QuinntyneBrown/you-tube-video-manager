require("../core/core.module");

import { ButtonComponent } from "./button.component";
import { ButtonActionCreator } from "./button.actions";
import { ButtonService } from "./button.service";
import *  as reducers from "./button.reducers";

var app = (<any>angular.module("app.button", [
    "app.core"    
]));

app.service("buttonActionCreator",["$location","dispatcher","buttonService","guid",ButtonActionCreator]);
app.service("buttonService",["$q","apiEndpoint","fetch",ButtonService]);
app.component(ButtonComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
