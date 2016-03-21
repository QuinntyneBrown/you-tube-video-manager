require("./contact-info-list.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    templateUrl: "wwwroot/contact-info/contact-info-list.component.html",
	styleUrls: ["wwwroot/contact-info/contact-info-list.component.css"],
    selector: "contact-info-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInfoListComponent {
    constructor() { }     
}
