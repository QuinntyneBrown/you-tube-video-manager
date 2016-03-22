require("../core/core.module");

import { PhotoEditorComponent } from "./photo-editor.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotoComponent } from "./photo.component";
import { PhotosContainerComponent } from "./photos-container.component";
import { PhotoActionCreator } from "./photo.actions";
import { PhotoService } from "./photo.service";
import *  as reducers from "./photo.reducers";

var app = (<any>angular.module("app.photo", [
    "app.core"    
]));

app.service("photoActionCreator",["$location","dispatcher","photoService","guid",PhotoActionCreator]);
app.service("photoService",["$q","apiEndpoint","fetch",PhotoService]);
app.component(PhotoEditorComponent);
app.component(PhotoListComponent);
app.component(PhotoComponent);
app.component(PhotosContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
