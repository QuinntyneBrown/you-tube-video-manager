import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class FeedbackActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, feedbackService, guid) {
        super($location,feedbackService,dispatcher,guid,AddOrUpdateFeedbackAction,AllFeedbacksAction,RemoveFeedbackAction,SetCurrentFeedbackAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateFeedbackSuccessAction(options.entity));

    currentFeedbackRemoved = () => this.dispatcher.dispatch(new CurrentFeedbackRemovedAction());
}


export class AddOrUpdateFeedbackAction { constructor(public id, public entity) { } }

export class AllFeedbacksAction { constructor(public id, public entities) { } }

export class RemoveFeedbackAction { constructor(public id, public entity) { } }

export class FeedbacksFilterAction { constructor(public id, public term) { } }

export class SetCurrentFeedbackAction { constructor(public entity) { } }

export class AddOrUpdateFeedbackSuccessAction { constructor(public entity) { } }

export class CurrentFeedbackRemovedAction { constructor() { } }


