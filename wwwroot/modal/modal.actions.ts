import { IDispatcher } from "../core/store";

export class ModalActionCreator  {
    constructor(private $rootScope: angular.IRootScopeService, private dispatcher: IDispatcher) {
        $rootScope.$on("$routeChangeSuccess", this.close);
    }
        
    open = options => this.dispatcher.dispatch(new OpenModalAction(options.html));

    close = () => this.dispatcher.dispatch(new CloseModalAction());
}

export class OpenModalAction { constructor(public html) { } }

export class CloseModalAction { constructor() { } }



