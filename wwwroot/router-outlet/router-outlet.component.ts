import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    template: "<div data-ng-view=''></div>",
    selector: "router-outlet"
})
export class RouterOutletComponent { }
