﻿import { ChangeDetectionStrategy } from "./change-detection-strategy";

export function Component(config: IComponentConfigurationOptions = {}) {
    return function (cls) {
        config.component = cls;
        cls.config = config;
    };
}

export function CanActivate(fnDefinition: Array<any>) {
    return function (cls) {
        cls.prototype.canActivate = () => {
            return fnDefinition
        };
    };
}

export interface IComponentConfigurationOptions {
    componentName?: string,
    component?: any,
    routes?: Array<string>,
    route?: string,
    templateUrl?: string,
    template?: string,
    selector?: string,
    viewProviders?: Array<string>;
    inputs?: Array<string>;
    transclude?: any,
    scope?: any,
    require?: string | Array<string>,
    styleUrls?: Array<string>,
    styles?: Array<string>,
    changeDetection?: ChangeDetectionStrategy,
    moduleId?: string
}