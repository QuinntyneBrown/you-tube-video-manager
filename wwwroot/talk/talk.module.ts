require("../core/core.module");

import { TalkEditorComponent } from "./talk-editor.component";
import { TalkListComponent } from "./talk-list.component";
import { TalkComponent } from "./talk.component";
import { TalksPageComponent } from "./talks-page.component";
import { TalkActionCreator } from "./talk.actions";
import { TalkService } from "./talk.service";
import *  as reducers from "./talk.reducers";

var app = (<any>angular.module("app.talk", [
    "app.core"    
]));

app.service("talkActionCreator",["$location","dispatcher","talkService","guid",TalkActionCreator]);
app.service("talkService",["$q","apiEndpoint","fetch",TalkService]);
app.component(TalkEditorComponent);
app.component(TalkListComponent);
app.component(TalkComponent);
app.component(TalksPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
