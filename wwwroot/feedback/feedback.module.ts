require("../core/core.module");
require("../modal/modal.module");

import { FeedbackEditorComponent } from "./feedback-editor.component";
import { FeedbackListComponent } from "./feedback-list.component";
import { FeedbackComponent } from "./feedback.component";
import { FeedbacksPageComponent } from "./feedbacks-page.component";
import { FeedbackActionCreator } from "./feedback.actions";
import { FeedbackService } from "./feedback.service";
import *  as reducers from "./feedback.reducers";

var app = (<any>angular.module("app.feedback", [
    "app.core",
    "app.modal"  
]));

app.service("feedbackActionCreator",["$location","dispatcher","feedbackService","guid",FeedbackActionCreator]);
app.service("feedbackService",["$q","apiEndpoint","fetch",FeedbackService]);
app.component(FeedbackEditorComponent);
app.component(FeedbackListComponent);
app.component(FeedbackComponent);
app.component(FeedbacksPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
