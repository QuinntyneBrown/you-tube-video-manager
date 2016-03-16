require("../core/core.module");

import { RouterOutletComponent } from "./router-outlet.component";

var app = (<any>angular.module("app.routerOutlet", [
    "app.core"    
]));

app.component(RouterOutletComponent);

