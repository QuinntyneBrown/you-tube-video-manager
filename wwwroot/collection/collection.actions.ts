import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class CollectionActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, collectionService, guid) {
        super($location,collectionService,dispatcher,guid,AddOrUpdateCollectionAction,AllCollectionsAction,RemoveCollectionAction,SetCurrentCollectionAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateCollectionSuccessAction(options.entity));

	currentCollectionRemoved = () => this.dispatcher.dispatch(new CurrentCollectionRemovedAction());
}


export class AddOrUpdateCollectionAction { constructor(public id, public entity) { } }

export class AllCollectionsAction { constructor(public id, public entities) { } }

export class RemoveCollectionAction { constructor(public id, public entity) { } }

export class CollectionsFilterAction { constructor(public id, public term) { } }

export class SetCurrentCollectionAction { constructor(public entity) { } }

export class AddOrUpdateCollectionSuccessAction { constructor(public entity) { } }

export class CurrentCollectionRemovedAction { constructor() { } }
