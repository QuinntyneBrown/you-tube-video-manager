import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class AccountActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, accountService, guid) {
        super($location,accountService,dispatcher,guid,AddOrUpdateAccountAction,AllAccountsAction,RemoveAccountAction,SetCurrentAccountAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateAccountSuccessAction(options.entity));

	currentAccountRemoved = () => this.dispatcher.dispatch(new CurrentAccountRemovedAction());
}


export class AddOrUpdateAccountAction { constructor(public id, public entity) { } }

export class AllAccountsAction { constructor(public id, public entities) { } }

export class RemoveAccountAction { constructor(public id, public entity) { } }

export class AccountsFilterAction { constructor(public id, public term) { } }

export class SetCurrentAccountAction { constructor(public entity) { } }

export class AddOrUpdateAccountSuccessAction { constructor(public entity) { } }

export class CurrentAccountRemovedAction { constructor() { } }
