import { CanActivate, Component } from "../core/component-decorators";

@Component({
    template: "<div data-ng-view=''></div>",
    selector: "router-outlet"
})
export class RouterOutletComponent { }
