import { CanActivate, Component } from "../core/component-decorators";
import { FlipCardActionCreator } from "./flip-card.actions";
import { FlipCardComponent } from "./flip-card.component";

@Component({
    templateUrl: "wwwroot/flip-card/flip-card-back.component.html",
    selector: "flip-card-back",
    transclude: true,
    require: '^flipCard',
    providers: ["$scope","flipCardActionCreator"]
})
export class FlipCardBackComponent {
    constructor(private $scope, private flipCardActionCreator: FlipCardActionCreator) { }
    storeOnChange = state => { }
    ngOnInit = () => { this.flipCard.ngOnChildInit(); }    
    flipCard: FlipCardComponent;
}