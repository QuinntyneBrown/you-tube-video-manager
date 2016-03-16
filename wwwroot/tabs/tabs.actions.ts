import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class TabsActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, tabsService, guid) {
        super($location, tabsService, dispatcher, guid, AddOrUpdateTabsAction, AllTabssAction, RemoveTabsAction, SetCurrentTabsAction)
    }    

    setCurrentTab = options => this.dispatcher.dispatch(new SetCurrentTabAction(options.tabName, options.index));

    tabChildLoaded = () => this.dispatcher.dispatch(new TabChildLoadedAction());
}

export class TabChildLoadedAction { constructor() { } }

export class AddOrUpdateTabsAction { constructor(public id, public entity) { } }

export class AllTabssAction { constructor(public id, public entities) { } }

export class RemoveTabsAction { constructor(public id, public entity) { } }

export class TabssFilterAction { constructor(public id, public term) { } }

export class SetCurrentTabAction { constructor(public tabName: string, public index: number) { } }

export class SetCurrentTabsAction { constructor(public entity) { } }
