import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { IDispatcher } from "../core/store";
import * as actions from "../modal/modal.actions";

import { HeaderActionCreator } from "./header.actions";
require('./header.component.css');

@Component({
    templateUrl: "wwwroot/header/header.component.html",
    styleUrls: ["wwwroot/header/header.component.css"],
    selector: "header",
    providers: ["$location","$rootScope","dispatcher","headerActionCreator"]
})
export class HeaderComponent {
    constructor(private $location: angular.ILocationService, private $rootScope: angular.IRootScopeService, private dispatcher: IDispatcher, private headerActionCreator: HeaderActionCreator) {
        $rootScope.$on("$routeChangeSuccess", this.onRouteChangeSuccess);
    }  
    storeOnChange = state => this.currentUser = state.currentUser;
    openFeedbackModal = () => {        
        this.dispatcher.dispatch(new actions.OpenModalAction({
            html: "<feedback-modal></feedback-modal>"
        }));
    }

    onRouteChangeSuccess = () => this._isAdmin = this.$location.path().substring(0, 6) === "/admin";

    currentUser;
    _isAdmin: boolean = false;
    isAdmin = () => this._isAdmin;
}
