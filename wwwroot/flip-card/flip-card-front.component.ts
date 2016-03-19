import { CanActivate, Component } from "../core/component-decorators";
import { FlipCardActionCreator } from "./flip-card.actions";
import { FlipCardComponent } from "./flip-card.component";

@Component({
    templateUrl: "wwwroot/flip-card/flip-card-front.component.html",
    selector: "flip-card-front",
    transclude: true,
    require: '^flipCard',
    providers: ["$element"]
})
export class FlipCardFrontComponent {
    constructor(public $element: angular.IAugmentedJQuery) { }
    ngOnInit = () => { this.flipCard.ngOnChildInit({ nativeElement: this.$element[0] }); }
    flipCard: FlipCardComponent;
    storeOnChange = state => { }
}