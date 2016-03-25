require("../core/core.module");

import { CollectionEditorComponent } from "./collection-editor.component";
import { CollectionListComponent } from "./collection-list.component";
import { CollectionComponent } from "./collection.component";
import { CollectionFeatureContainerComponent } from "./collections-feature-container.component";
import { CollectionsPageComponent } from "./collections-page.component";
import { CollectionActionCreator } from "./collection.actions";
import { CollectionService } from "./collection.service";
import *  as reducers from "./collection.reducers";

var app = (<any>angular.module("app.collection", [
    "app.core"    
]));

app.service("collectionActionCreator",["$location","dispatcher","collectionService","guid",CollectionActionCreator]);
app.service("collectionService",["$q","apiEndpoint","fetch",CollectionService]);
app.component(CollectionEditorComponent);
app.component(CollectionListComponent);
app.component(CollectionComponent);
app.component(CollectionsPageComponent);
app.component(CollectionFeatureContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
