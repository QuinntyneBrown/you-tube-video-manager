require("../core/core.module");

import { FooterComponent } from "./footer.component";
import { FooterActionCreator } from "./footer.actions";
import { FooterService } from "./footer.service";
import *  as reducers from "./footer.reducers";

var app = (<any>angular.module("app.footer", [
    "app.core"    
]));

app.service("footerActionCreator",["$location","dispatcher","footerService","guid",FooterActionCreator]);
app.service("footerService",["$q","apiEndpoint","fetch",FooterService]);
app.component(FooterComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
