require("../core/core.module");

import { ContactInfoEditorComponent } from "./contact-info-editor.component";
import { ContactInfoListComponent } from "./contact-info-list.component";
import { ContactInfoComponent } from "./contact-info.component";
import { ContactInfosContainerComponent } from "./contact-infos-container.component";
import { ContactInfoActionCreator } from "./contact-info.actions";
import { ContactInfoService } from "./contact-info.service";
import *  as reducers from "./contact-info.reducers";

var app = (<any>angular.module("app.contactInfo", [
    "app.core"    
]));

app.service("contactInfoActionCreator",["$location","dispatcher","contactInfoService","guid",ContactInfoActionCreator]);
app.service("contactInfoService",["$q","apiEndpoint","fetch",ContactInfoService]);
app.component(ContactInfoEditorComponent);
app.component(ContactInfoListComponent);
app.component(ContactInfoComponent);
app.component(ContactInfosContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
