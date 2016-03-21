require("../core/core.module");

import { ProfileEditorComponent } from "./profile-editor.component";
import { ProfileListComponent } from "./profile-list.component";
import { ProfileComponent } from "./profile.component";
import { ProfilesContainerComponent } from "./profiles-container.component";
import { ProfileActionCreator } from "./profile.actions";
import { ProfileService } from "./profile.service";
import *  as reducers from "./profile.reducers";

var app = (<any>angular.module("app.profile", [
    "app.core"    
]));

app.service("profileActionCreator",["$location","dispatcher","profileService","guid",ProfileActionCreator]);
app.service("profileService",["$q","apiEndpoint","fetch",ProfileService]);
app.component(ProfileEditorComponent);
app.component(ProfileListComponent);
app.component(ProfileComponent);
app.component(ProfilesContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
