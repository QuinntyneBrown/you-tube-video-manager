import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class YouTubeVideoActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, youTubeVideoService, guid) {
        super($location,youTubeVideoService,dispatcher,guid,AddOrUpdateYouTubeVideoAction,AllYouTubeVideosAction,RemoveYouTubeVideoAction,SetCurrentYouTubeVideoAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateYouTubeVideoSuccessAction(options.entity));

    currentYouTubeVideoRemoved = () => this.dispatcher.dispatch(new CurrentYouTubeVideoRemovedAction());

    getByVideoId = options => {
        var newId = this.guid();
        this.service.getByVideoId({ id: options.id }).then(results => {
            var action = new AddOrUpdateYouTubeVideoAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    }
}


export class AddOrUpdateYouTubeVideoAction { constructor(public id, public entity) { } }

export class AllYouTubeVideosAction { constructor(public id, public entities) { } }

export class RemoveYouTubeVideoAction { constructor(public id, public entity) { } }

export class YouTubeVideosFilterAction { constructor(public id, public term) { } }

export class SetCurrentYouTubeVideoAction { constructor(public entity) { } }

export class AddOrUpdateYouTubeVideoSuccessAction { constructor(public entity) { } }

export class CurrentYouTubeVideoRemovedAction { constructor() { } }
