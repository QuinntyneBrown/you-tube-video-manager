import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class TalkActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, talkService, guid) {
        super($location,talkService,dispatcher,guid,AddOrUpdateTalkAction,AllTalksAction,RemoveTalkAction,SetCurrentTalkAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateTalkSuccessAction(options.entity));

	currentTalkRemoved = () => this.dispatcher.dispatch(new CurrentTalkRemovedAction());
}


export class AddOrUpdateTalkAction { constructor(public id, public entity) { } }

export class AllTalksAction { constructor(public id, public entities) { } }

export class RemoveTalkAction { constructor(public id, public entity) { } }

export class TalksFilterAction { constructor(public id, public term) { } }

export class SetCurrentTalkAction { constructor(public entity) { } }

export class AddOrUpdateTalkSuccessAction { constructor(public entity) { } }

export class CurrentTalkRemovedAction { constructor() { } }
