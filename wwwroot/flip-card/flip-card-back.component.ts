import { CanActivate, Component } from "../core/component-decorators";
import { FlipCardActionCreator } from "./flip-card.actions";
import { FlipCardComponent } from "./flip-card.component";

@Component({
    templateUrl: "wwwroot/flip-card/flip-card-back.component.html",
    selector: "flip-card-back",
    transclude: true,
    require: '^flipCard',
    providers: ["$element"]
})
export class FlipCardBackComponent {
    constructor(private $element: angular.IAugmentedJQuery) { }
    storeOnChange = state => { }
    ngOnInit = () => { this.flipCard.ngOnChildInit({ component: this }); }
    flipCard: FlipCardComponent;
}