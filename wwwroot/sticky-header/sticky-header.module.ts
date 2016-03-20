require("../core/core.module");

import { StickyHeaderActionCreator } from "./sticky-header.actions";
import { StickyHeader } from "./sticky-header.service";
import *  as reducers from "./sticky-header.reducers";

var app = (<any>angular.module("app.stickyHeader", [
    "app.core"    
]));

app.service("stickyHeaderActionCreator",["$location","dispatcher","stickyHeaderService","guid",StickyHeaderActionCreator]);
app.service("stickyHeader", [StickyHeader]);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

app.run(["stickyHeader", stickyHeader => { }]);

