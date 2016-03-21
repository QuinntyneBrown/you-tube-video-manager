require("../core/core.module");

import { AccountEditorComponent } from "./account-editor.component";
import { AccountListComponent } from "./account-list.component";
import { AccountComponent } from "./account.component";
import { AccountsContainerComponent } from "./accounts-container.component";
import { AccountActionCreator } from "./account.actions";
import { AccountService } from "./account.service";
import *  as reducers from "./account.reducers";

var app = (<any>angular.module("app.account", [
    "app.core"    
]));

app.service("accountActionCreator",["$location","dispatcher","accountService","guid",AccountActionCreator]);
app.service("accountService",["$q","apiEndpoint","fetch",AccountService]);
app.component(AccountEditorComponent);
app.component(AccountListComponent);
app.component(AccountComponent);
app.component(AccountsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
