require("../core/core.module");

import { HomePageComponent } from "./home-page.component";
import { HomePageActionCreator } from "./home-page.actions";
import { HomePageService } from "./home-page.service";
import *  as reducers from "./home-page.reducers";

var app = (<any>angular.module("app.homePage", [
    "app.core"    
]));

app.service("homePageActionCreator",["$location","dispatcher","homePageService","guid",HomePageActionCreator]);
app.service("homePageService",["$q","apiEndpoint","fetch",HomePageService]);
app.component(HomePageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
