import { Component, ChangeDetectionStrategy } from "../core";
import { ImageButtonActionCreator, ImageButtonMouseEnterAction, ImageButtonMouseLeaveAction, ImageButtonMouseClickAction } from "./image-button.actions";

@Component({
    template: require("./image-button.component.html"),
    styles: require("./image-button.component.css"),
    selector: "image-button",
    viewProviders: ["$attrs", "$window", "guid","ImageButtonActionCreator"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageButtonComponent {
    constructor(private $attrs: angular.IAttributes, private $window: angular.IWindowService, private guid: Function, private ImageButtonActionCreator: ImageButtonActionCreator) {}
    storeOnChange = state => {
        if (state.lastTriggeredByAction instanceof ImageButtonMouseEnterAction && state.lastTriggeredByActionId == this.id) 
            this.src = this.$attrs["enter"];
        
        if (state.lastTriggeredByAction instanceof ImageButtonMouseLeaveAction && state.lastTriggeredByActionId == this.id)
            this.src = this.$attrs["leave"];

        if (state.lastTriggeredByAction instanceof ImageButtonMouseClickAction && state.lastTriggeredByActionId == this.id)
            this.$window.open(this.$attrs["url"], this.$attrs["target"]);        
    }

    mouseEnter = () => this.ImageButtonActionCreator.enter({ id: this.id });

    mouseLeave = () => this.ImageButtonActionCreator.leave({ id: this.id });
    
    onClick = () => this.ImageButtonActionCreator.click({ id: this.id });

    src = this.$attrs["leave"];

    id = this.guid();
}
