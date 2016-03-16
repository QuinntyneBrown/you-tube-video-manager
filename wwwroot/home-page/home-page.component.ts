import { CanActivate, Component } from "../core/component-decorators";
import { HomePageActionCreator } from "./home-page.actions";

@Component({
    templateUrl: "wwwroot/home-page/home-page.component.html",
    selector: "home-page",
    providers: ["homePageActionCreator"]
})
export class HomePageComponent {
    constructor(private homePageActionCreator: HomePageActionCreator) { }
  
}
