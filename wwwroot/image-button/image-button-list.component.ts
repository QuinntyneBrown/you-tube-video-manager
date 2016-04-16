import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { ImageButtonActionCreator } from "./image-button.actions";

@Component({
    template: require("./image-button-list.component.html"),
    styles: require("./image-button-list.component.css"),
    selector: "image-button-list",
    inputs:["imageButtons"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageButtonListComponent {
    constructor() { }

    imageButtons;
}
