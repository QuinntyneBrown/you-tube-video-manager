import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class SpeakerActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, speakerService, guid) {
        super($location,speakerService,dispatcher,guid,AddOrUpdateSpeakerAction,AllSpeakersAction,RemoveSpeakerAction,SetCurrentSpeakerAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateSpeakerSuccessAction(options.entity));

	currentSpeakerRemoved = () => this.dispatcher.dispatch(new CurrentSpeakerRemovedAction());
}


export class AddOrUpdateSpeakerAction { constructor(public id, public entity) { } }

export class AllSpeakersAction { constructor(public id, public entities) { } }

export class RemoveSpeakerAction { constructor(public id, public entity) { } }

export class SpeakersFilterAction { constructor(public id, public term) { } }

export class SetCurrentSpeakerAction { constructor(public entity) { } }

export class AddOrUpdateSpeakerSuccessAction { constructor(public entity) { } }

export class CurrentSpeakerRemovedAction { constructor() { } }
