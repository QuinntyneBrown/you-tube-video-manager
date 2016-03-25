import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

require("./about-container.component.css");

@Component({
    templateUrl: "wwwroot/about/about-container.component.html",
    styleUrls: ["wwwroot/about/about-container.component.css"],
    selector: "about-container",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutContainerComponent {


}