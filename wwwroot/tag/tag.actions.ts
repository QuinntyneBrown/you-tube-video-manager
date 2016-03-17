import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class TagActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, tagService, guid) {
        super($location,tagService,dispatcher,guid,AddOrUpdateTagAction,AllTagsAction,RemoveTagAction,SetCurrentTagAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateTagSuccessAction(options.entity));

	currentTagRemoved = () => this.dispatcher.dispatch(new CurrentTagRemovedAction());
}


export class AddOrUpdateTagAction { constructor(public id, public entity) { } }

export class AllTagsAction { constructor(public id, public entities) { } }

export class RemoveTagAction { constructor(public id, public entity) { } }

export class TagsFilterAction { constructor(public id, public term) { } }

export class SetCurrentTagAction { constructor(public entity) { } }

export class AddOrUpdateTagSuccessAction { constructor(public entity) { } }

export class CurrentTagRemovedAction { constructor() { } }
