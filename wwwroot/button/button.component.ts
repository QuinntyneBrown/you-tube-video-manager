import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import { ButtonActionCreator } from "./button.actions";

@Component({
    templateUrl: "wwwroot/button/button.component.html",
    selector: "calypso-button",
    componentName: "calypsoButtonComponent",
    inputs: ['caption', 'onClick'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    constructor() { }
  
}
