import { CanActivate, Component } from "../core/component-decorators";
import { FlipCardActionCreator } from "./flip-card.actions";
import { FlipCardComponent } from "./flip-card.component";

@Component({
    templateUrl: "wwwroot/flip-card/flip-card-front.component.html",
    selector: "flip-card-front",
    transclude: true,
    require: '^flipCard',
    providers: []
})
export class FlipCardFrontComponent {
    constructor() { }
    ngOnInit = () => { this.flipCard.ngOnChildInit(); }
    flipCard: FlipCardComponent;
    storeOnChange = state => { }
}