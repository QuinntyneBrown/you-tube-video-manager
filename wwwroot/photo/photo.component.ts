require("./photo.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { PhotoActionCreator } from "./photo.actions";

@Component({
    templateUrl: "wwwroot/photo/photo.component.html",
	styleUrls: ["wwwroot/photo/photo.component.css"],
    selector: "photo",
    providers: ["photoActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoComponent {
    constructor(private photoActionCreator: PhotoActionCreator) { }
  
}
