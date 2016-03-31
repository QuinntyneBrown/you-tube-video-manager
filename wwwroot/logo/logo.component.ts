import { Component } from "../core/component-decorators";

require("./logo.component.css")

@Component({
    selector: "logo",
    templateUrl: "wwwroot/logo/logo.component.html",
    styleUrls: ["wwwroot/logo/logo.component.css"],
    viewProviders: ["$attrs"],
    inputs:["?href","?src"]
})
export class LogoComponent {
    constructor(private $attrs: angular.IAttributes) { }
    href: string = (this.$attrs as any).href;
    src: string = (this.$attrs as any).src;    
}