require("../core/core.module");

import { LogoComponent } from "./logo.component";

var app = (<any>angular.module("app.logo", [
    "app.core",
]));

app.component(LogoComponent);

app.run(["modal", "modalActionCreator", (modal, modalActionCreator) => { }]);
