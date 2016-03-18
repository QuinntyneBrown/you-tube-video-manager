import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class PlaylistActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, playlistService, guid) {
        super($location,playlistService,dispatcher,guid,AddOrUpdatePlaylistAction,AllPlaylistsAction,RemovePlaylistAction,SetCurrentPlaylistAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdatePlaylistSuccessAction(options.entity));

	currentPlaylistRemoved = () => this.dispatcher.dispatch(new CurrentPlaylistRemovedAction());
}

export class AddPlaylistItemAction { constructor(public id, public entity) { } }

export class AddOrUpdatePlaylistAction { constructor(public id, public entity) { } }

export class AllPlaylistsAction { constructor(public id, public entities) { } }

export class RemovePlaylistAction { constructor(public id, public entity) { } }

export class PlaylistsFilterAction { constructor(public id, public term) { } }

export class SetCurrentPlaylistAction { constructor(public entity) { } }

export class AddOrUpdatePlaylistSuccessAction { constructor(public entity) { } }

export class CurrentPlaylistRemovedAction { constructor() { } }
