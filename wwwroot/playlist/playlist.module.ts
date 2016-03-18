require("../core/core.module");

import { PlaylistEditorComponent } from "./playlist-editor.component";
import { PlaylistListComponent } from "./playlist-list.component";
import { PlaylistComponent } from "./playlist.component";
import { PlaylistsPageComponent } from "./playlists-page.component";
import { PlaylistActionCreator } from "./playlist.actions";
import { PlaylistService } from "./playlist.service";
import *  as reducers from "./playlist.reducers";

var app = (<any>angular.module("app.playlist", [
    "app.core"    
]));

app.service("playlistActionCreator",["$location","dispatcher","playlistService","guid",PlaylistActionCreator]);
app.service("playlistService",["$q","apiEndpoint","fetch",PlaylistService]);
app.component(PlaylistEditorComponent);
app.component(PlaylistListComponent);
app.component(PlaylistComponent);
app.component(PlaylistsPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
