require("../core/core.module");
require("../backdrop/backdrop.module");

import { ModalActionCreator } from "./modal.actions";
import { Modal } from "./modal.service";
import * as reducers from "./modal.reducers";

var app = (<any>angular.module("app.modal", [
    "app.core",
    "app.backdrop"    
]));

app.service("modalActionCreator", ["$rootScope","dispatcher",ModalActionCreator]);

app.service("modal", [
    "$compile",
    "$q",
    "$rootScope",
    "appendToBodyAsync",
    "backdrop",
    "extendCssAsync",
    "removeElement",
    "setOpacityAsync",
    "store", Modal]);

app.config(["reducersProvider", reducersProvider => {
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

app.run(["modal", "modalActionCreator", (modal, modalActionCreator) => { }]);
