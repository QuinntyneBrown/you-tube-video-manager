require("../core/core.module");

import { BackdropActionCreator } from "./backdrop.actions";
import { Backdrop } from "./backdrop.service";
import * as reducers from "./backdrop.reducers";

var app = (<any>angular.module("app.backdrop", [
    "app.core"
]));

app.service("backdropActionCreator", ["$location", "dispatcher", "backdropService", "guid", BackdropActionCreator]);

app.service("backdrop", ["$q", "appendToBodyAsync", "extendCssAsync", "removeElement", "setOpacityAsync","store", Backdrop]);

app.config(["reducersProvider", reducersProvider => {
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

app.run(["backdrop", backdrop => { }]);
