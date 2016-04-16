require("../core/core.module");

import { ImageButtonComponent } from "./image-button.component";
import { ImageButtonListComponent } from "./image-button-list.component";
import { ImageButtonActionCreator } from "./image-button.actions";

var app = (<any>angular.module("app.imageButton", [
    "app.core"    
]));

app.service("ImageButtonActionCreator",["dispatcher",ImageButtonActionCreator]);

app.component(ImageButtonComponent);
app.component(ImageButtonListComponent);