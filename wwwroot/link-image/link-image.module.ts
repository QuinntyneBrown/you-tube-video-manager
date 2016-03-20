require("../core/core.module");

import { LinkImageComponent } from "./link-image.component";

var app = (<any>angular.module("app.linkImage", [
    "app.core",
]));

app.component(LinkImageComponent);

