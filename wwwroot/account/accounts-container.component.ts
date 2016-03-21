require("./accounts-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./account.actions";
import { pluck } from "../core/pluck";
import { Account } from "./account.model";

@Component({
    routes: ["/admin/accounts","/admin/account/edit/:accountId"],
    templateUrl: "wwwroot/account/accounts-container.component.html",
    styleUrls: ["wwwroot/account/accounts-container.component.css"],
    selector: "accounts-container",
    providers: ["$location","$routeParams","accountActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "accountActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, accountActionCreator: actions.AccountActionCreator) => {
    var accountId = $route.current.params.accountId;
    var promises = [invokeAsync(accountActionCreator.all)];
    if (accountId) { promises.push(invokeAsync({ action: accountActionCreator.getById, params: { id: accountId } })) };
    return $q.all(promises);
}])
export class AccountsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private accountActionCreator: actions.AccountActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.accounts;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentAccountAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/accounts");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentAccountAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/account/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveAccountAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["accountId"]), items: this.entities }) as Account;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/accounts"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["accountId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["accountId"]), items: this.entities }) as Account;
        } else {
            this.entity = new Account();
        }
    }

    edit = entity => this.accountActionCreator.edit(entity);
    remove = entity => this.accountActionCreator.remove(entity);
    create = entity => this.accountActionCreator.create();
    addOrUpdate = options => this.accountActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
