import { Component } from "../core/component-decorators";

require("./link-image.component.css")

@Component({
    selector: "link-image",
    templateUrl: "wwwroot/link-image/link-image.component.html",
    styleUrls: ["wwwroot/link-image/link-image.component.css"],
    providers:["$attrs"],
    inputs:["?href","?src"]
})
export class LinkImageComponent {
    constructor(private $attrs: angular.IAttributes) { }
    href: string = (this.$attrs as any).href;
    src: string = (this.$attrs as any).src;    
}