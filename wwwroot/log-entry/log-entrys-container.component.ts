require("./log-entrys-container.component.css");

import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./log-entry.actions";
import { pluck } from "../core/pluck";
import { LogEntry } from "./log-entry.model";

@Component({
    routes: ["/admin/logentrys","/admin/logentry/edit/:logEntryId"],
    templateUrl: "wwwroot/log-entry/log-entrys-container.component.html",
    styleUrls: ["wwwroot/log-entry/log-entrys-container.component.css"],
    selector: "log-entrys-container",
    providers: ["$location","$routeParams","logEntryActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "logEntryActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, logEntryActionCreator: actions.LogEntryActionCreator) => {
    var logEntryId = $route.current.params.logEntryId;
    var promises = [invokeAsync(logEntryActionCreator.all)];
    if (logEntryId) { promises.push(invokeAsync({ action: logEntryActionCreator.getById, params: { id: logEntryId } })) };
    return $q.all(promises);
}])
export class LogEntrysContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private logEntryActionCreator: actions.LogEntryActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.logEntrys;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentLogEntryAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/logentrys");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentLogEntryAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/logentry/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveLogEntryAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["logEntryId"]), items: this.entities }) as LogEntry;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/logentrys"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["logEntryId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["logEntryId"]), items: this.entities }) as LogEntry;
        } else {
            this.entity = new LogEntry();
        }
    }

    edit = entity => this.logEntryActionCreator.edit(entity);
    remove = entity => this.logEntryActionCreator.remove(entity);
    create = entity => this.logEntryActionCreator.create();
    addOrUpdate = options => this.logEntryActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
