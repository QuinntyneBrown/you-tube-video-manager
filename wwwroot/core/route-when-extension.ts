var routeConfigs = [];

import { IRouteResolverService } from "./route-resolver";


angular.module("routeWhenExtension", ["ngRoute"])
    .config(["$routeProvider", $routeProvider => {
        
        var whenFn = $routeProvider.when;

        function getTemplateUrlFromComponentName(options) {
            if (options.componentName.length > 9) {
                if (options.componentName.substr(options.componentName.length - 9) === "Component") {
                    var componentTemplateFileName = options.componentName.substr(0, options.componentName.length - 9) + ".html";
                    return "/wwwroot/components/" + componentTemplateFileName;
                }
            }
            return "";
        }

        $routeProvider.when = function () {

            if (arguments[1] && arguments[0]) {
                var path = arguments[0];
                arguments[1].templateUrl = arguments[1].componentTemplateUrl || arguments[1].templateUrl;
                arguments[1].controller = arguments[1].componentName || arguments[1].controller;
                arguments[1].controllerAs = "vm";
                arguments[1].reloadOnSearch = arguments[1].reloadOnSearch || false;

                if (arguments[1].componentName && !arguments[1].templateUrl)
                    arguments[1].templateUrl = getTemplateUrlFromComponentName({
                        moduleName: arguments[1].moduleName,
                        componentName: arguments[1].componentName
                    });
                arguments[1].resolve = arguments[1].resolve || {};

                angular.extend(arguments[1].resolve, {
                    routeData: [
                        "routeResolverService", (routeResolverService: IRouteResolverService) => {
                            return routeResolverService.resolve(path);
                        }
                    ]
                });
            }

            routeConfigs.push({
                when: arguments[0],
                config: arguments[1]
            });

            whenFn.apply($routeProvider, arguments);

            return $routeProvider;
        }
    }]);