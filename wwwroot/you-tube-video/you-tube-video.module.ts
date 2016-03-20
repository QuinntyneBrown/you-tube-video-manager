require("../core/core.module");

import { YouTubeVideoEditorComponent } from "./you-tube-video-editor.component";
import { YouTubeVideoListComponent } from "./you-tube-video-list.component";
import { YouTubeVideoComponent } from "./you-tube-video.component";
import { YouTubeVideosPageComponent } from "./you-tube-videos-page.component";
import { YouTubeVideoPlayerComponent  } from "./you-tube-video-player";
import { YouTubeVideoPlayerPageComponent } from "./you-tube-video-player-page.component";
import { YouTubeVideoTagModalComponent } from "./you-tube-video-tag-modal.component";

import { YouTubeVideoActionCreator } from "./you-tube-video.actions";
import { YouTubeVideoService } from "./you-tube-video.service";
import * as reducers from "./you-tube-video.reducers";

var app = (<any>angular.module("app.youTubeVideo", [
    "app.core"    
]));

app.service("youTubeVideoActionCreator",["$location","dispatcher","youTubeVideoService","guid",YouTubeVideoActionCreator]);
app.service("youTubeVideoService",["$q","apiEndpoint","fetch",YouTubeVideoService]);
app.component(YouTubeVideoEditorComponent);
app.component(YouTubeVideoListComponent);
app.component(YouTubeVideoComponent);
app.component(YouTubeVideosPageComponent);
app.component(YouTubeVideoPlayerComponent);
app.component(YouTubeVideoPlayerPageComponent);
app.component(YouTubeVideoTagModalComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
