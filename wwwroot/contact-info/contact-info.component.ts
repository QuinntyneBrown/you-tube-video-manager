require("./contact-info.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { ContactInfoActionCreator } from "./contact-info.actions";

@Component({
    templateUrl: "wwwroot/contact-info/contact-info.component.html",
	styleUrls: ["wwwroot/contact-info/contact-info.component.css"],
    selector: "contact-info",
    viewProviders: ["contactInfoActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInfoComponent {
    constructor(private contactInfoActionCreator: ContactInfoActionCreator) { }
  
}
