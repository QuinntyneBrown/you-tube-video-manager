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
    providers: ["$attrs","$element"]
})
export class FlipCardComponent {
    constructor(private $attrs: angular.IAttributes, private $element: angular.IAugmentedJQuery) { }
  
    ngOnInit = () => {
        this.$element[0].addEventListener("ontouchstart", () => {
            this.$element[0].classList.toggle('hover');
        })       
    }

    ngOnChildInit = () => {
        
    }

}
