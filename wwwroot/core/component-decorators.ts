export function Component(config: any = {}) {
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
