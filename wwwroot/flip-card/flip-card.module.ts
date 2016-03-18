require("../core/core.module");

import { FlipCardComponent } from "./flip-card.component";
import { FlipCardBackComponent } from "./flip-card-back.component";
import { FlipCardFrontComponent } from "./flip-card-front.component";

import { FlipCardActionCreator } from "./flip-card.actions";
import *  as reducers from "./flip-card.reducers";

var app = (<any>angular.module("app.flipCard", [
    "app.core"    
]));

app.service("flipCardActionCreator",["$location","dispatcher","guid",FlipCardActionCreator]);
app.component(FlipCardComponent);
app.component(FlipCardFrontComponent);
app.component(FlipCardBackComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
