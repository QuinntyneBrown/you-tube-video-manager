require("../core/core.module");

import { PopoverComponent } from "./popover.component";
import { PopoverActionCreator } from "./popover.actions";
import { Popover } from "./popover.service";
import *  as reducers from "./popover.reducers";

var app = (<any>angular.module("app.popover", [
    "app.core"    
]));

app.service("popoverActionCreator",["$location","dispatcher","popoverService","guid",PopoverActionCreator]);
app.service("popoverService",[Popover]);
app.component(PopoverComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
