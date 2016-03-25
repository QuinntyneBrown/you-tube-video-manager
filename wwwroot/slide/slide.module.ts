require("../core/core.module");

import { SlideComponent } from "./slide.component";
import { SlideActionCreator } from "./slide.actions";
import { SlideService } from "./slide.service";
import *  as reducers from "./slide.reducers";

var app = (<any>angular.module("app.slide", [
    "app.core"    
]));

app.service("slideActionCreator",["$location","dispatcher","slideService","guid",SlideActionCreator]);
app.service("slideService",["$q","apiEndpoint","fetch",SlideService]);
app.component(SlideComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
