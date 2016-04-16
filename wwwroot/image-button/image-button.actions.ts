import { IDispatcher } from "../core";

export class ImageButtonActionCreator  {
    constructor(public dispatcher: IDispatcher) {
    }    

    enter = (options) => this.dispatcher.dispatch(new ImageButtonMouseEnterAction(options.id));

    leave = (options) => this.dispatcher.dispatch(new ImageButtonMouseLeaveAction(options.id));

    click = (options) => this.dispatcher.dispatch(new ImageButtonMouseClickAction(options.id));
}


export class ImageButtonMouseEnterAction { constructor(public id:string) { } }

export class ImageButtonMouseLeaveAction { constructor(public id: string) { } }

export class ImageButtonMouseClickAction { constructor(public id: string) { } }