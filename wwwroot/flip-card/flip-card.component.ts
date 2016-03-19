require('./flip-card.component.css');

import { CanActivate, Component } from "../core/component-decorators";
import { FlipCardActionCreator } from "./flip-card.actions";

@Component({
    templateUrl: "wwwroot/flip-card/flip-card.component.html",
    styleUrls: ["wwwroot/flip-card/flip-card.component.css"],
    transclude: {
        'front': '?flipCardFront',
        'back': '?flipCardBack'
    },
    selector: "flip-card",
    providers: ["$attrs", "$element"],
    inputs: ['height?','width?']
})
export class FlipCardComponent {
    constructor(private $attrs: angular.IAttributes, private $element: angular.IAugmentedJQuery) { }
  
    ngOnInit = () => {
        this.$element[0].style.height = this.height;
        this.$element[0].style.width = this.width;
        this.$element[0].addEventListener("ontouchstart", () => {
            this.$element[0].classList.toggle('hover');
        });        
    }

    ngOnChildInit = (options) => {
        this.viewChildren.push(options.nativeElement);
        options.nativeElement.style.height = this.height;
        options.nativeElement.style.width = this.width;

        if (this.viewChildren.length == 2) {
            this.viewChildren[0].style.backgroundColor = "#DCC6E0";
            this.viewChildren[1].style.backgroundColor = "#C5EFF7";
        }
    }

    get height() { return (this.$attrs as any).height || "480px"; }
    get width() { return (this.$attrs as any).width || "320px"; }
    set height(value) { }
    set width(value) { }
    viewChildren: Array<HTMLElement> = [];
}
