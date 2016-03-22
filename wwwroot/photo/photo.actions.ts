import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class PhotoActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, photoService, guid) {
        super($location,photoService,dispatcher,guid,AddOrUpdatePhotoAction,AllPhotosAction,RemovePhotoAction,SetCurrentPhotoAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdatePhotoSuccessAction(options.entity));

	currentPhotoRemoved = () => this.dispatcher.dispatch(new CurrentPhotoRemovedAction());
}


export class AddOrUpdatePhotoAction { constructor(public id, public entity) { } }

export class AllPhotosAction { constructor(public id, public entities) { } }

export class RemovePhotoAction { constructor(public id, public entity) { } }

export class PhotosFilterAction { constructor(public id, public term) { } }

export class SetCurrentPhotoAction { constructor(public entity) { } }

export class AddOrUpdatePhotoSuccessAction { constructor(public entity) { } }

export class CurrentPhotoRemovedAction { constructor() { } }
