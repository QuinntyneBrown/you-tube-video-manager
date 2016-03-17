require("../core/core.module");

import { TagEditorComponent } from "./tag-editor.component";
import { TagListComponent } from "./tag-list.component";
import { TagComponent } from "./tag.component";
import { TagsPageComponent } from "./tags-page.component";
import { TagActionCreator } from "./tag.actions";
import { TagService } from "./tag.service";
import *  as reducers from "./tag.reducers";

var app = (<any>angular.module("app.tag", [
    "app.core"    
]));

app.service("tagActionCreator",["$location","dispatcher","tagService","guid",TagActionCreator]);
app.service("tagService",["$q","apiEndpoint","fetch",TagService]);
app.component(TagEditorComponent);
app.component(TagListComponent);
app.component(TagComponent);
app.component(TagsPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
