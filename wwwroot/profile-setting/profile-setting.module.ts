require("../core/core.module");

import { ProfileSettingEditorComponent } from "./profile-setting-editor.component";
import { ProfileSettingListComponent } from "./profile-setting-list.component";
import { ProfileSettingComponent } from "./profile-setting.component";
import { ProfileSettingsContainerComponent } from "./profile-settings-container.component";
import { ProfileSettingActionCreator } from "./profile-setting.actions";
import { ProfileSettingService } from "./profile-setting.service";
import *  as reducers from "./profile-setting.reducers";

var app = (<any>angular.module("app.profileSetting", [
    "app.core"    
]));

app.service("profileSettingActionCreator",["$location","dispatcher","profileSettingService","guid",ProfileSettingActionCreator]);
app.service("profileSettingService",["$q","apiEndpoint","fetch",ProfileSettingService]);
app.component(ProfileSettingEditorComponent);
app.component(ProfileSettingListComponent);
app.component(ProfileSettingComponent);
app.component(ProfileSettingsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
