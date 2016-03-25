require("../core/core.module");

import { AboutContainerComponent } from "./about-container.component";

var app = (<any>angular.module("app.about", [
    "app.core"
]));

app.component(AboutContainerComponent);

