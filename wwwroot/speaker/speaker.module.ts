require("../core/core.module");

import { SpeakerEditorComponent } from "./speaker-editor.component";
import { SpeakerListComponent } from "./speaker-list.component";
import { SpeakerComponent } from "./speaker.component";
import { SpeakersPageComponent } from "./speakers-page.component";
import { SpeakerActionCreator } from "./speaker.actions";
import { SpeakerService } from "./speaker.service";
import *  as reducers from "./speaker.reducers";

var app = (<any>angular.module("app.speaker", [
    "app.core"    
]));

app.service("speakerActionCreator",["$location","dispatcher","speakerService","guid",SpeakerActionCreator]);
app.service("speakerService",["$q","apiEndpoint","fetch",SpeakerService]);
app.component(SpeakerEditorComponent);
app.component(SpeakerListComponent);
app.component(SpeakerComponent);
app.component(SpeakersPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
