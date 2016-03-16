angular.module("apiEndpoint", []).provider("apiEndpoint", class ApiEndpointProvider {
    config: any = {
        getBaseUrl: (name?: string) => {
            var baseUrl = "";

            if (name) {
                this.config.baseUrls.forEach((endpointDefinition: any) => {
                    if (name === endpointDefinition.name) {
                        baseUrl = endpointDefinition.url;
                    }
                });
            }

            if (!name || baseUrl === "") {
                this.config.baseUrls.forEach((endpointDefinition: any) => {
                    if (!endpointDefinition.name && baseUrl === "") {
                        baseUrl = endpointDefinition.url;
                    }
                });
            }
            return baseUrl;
        },
        baseUrls: [],
        configure: function (baseUrl: string, name?: string) {
            var self = this;
            self.baseUrls.push({ url: baseUrl, name: name });
        }
    };

    configure(baseUrl: string, name?: string): void {
        this.config.baseUrls.push({ url: baseUrl, name: name });
    }

    $get(): any {
        return this.config;
    }
});