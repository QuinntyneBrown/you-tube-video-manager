import { CanActivate, Component } from "../core/component-decorators";
import { FlipCardActionCreator } from "./flip-card.actions";
import { FlipCardComponent } from "./flip-card.component";

@Component({
    templateUrl: "wwwroot/flip-card/flip-card-back.component.html",
    selector: "flip-card-back",
    transclude: true,
    require: '^flipCard',
    providers: ["$element","flipCardActionCreator"]
})
export class FlipCardBackComponent {
    constructor(private $element: angular.IAugmentedJQuery, private flipCardActionCreator: FlipCardActionCreator) { }
    storeOnChange = state => { }
    ngOnInit = () => { this.flipCard.ngOnChildInit({ nativeElement: this.$element[0] }); }
    flipCard: FlipCardComponent;
}