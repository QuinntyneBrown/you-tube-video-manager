require("../core/core.module");

import { SearchComponent } from "./search.component";
import { SearchActionCreator } from "./search.actions";
import { SearchService } from "./search.service";
import *  as reducers from "./search.reducers";

var app = (<any>angular.module("app.search", [
    "app.core"    
]));

app.service("searchActionCreator",["$location","dispatcher","searchService","guid",SearchActionCreator]);
app.service("searchService",["$q","apiEndpoint","fetch",SearchService]);
app.component(SearchComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
