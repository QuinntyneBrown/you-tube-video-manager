
export class LoginRedirectProvider implements ng.IServiceProvider {    
    loginUrl: string = "/login";
    lastPath: string;
    defaultPath: string = "/";
    setLoginUrl = value => this.loginUrl = value;
    setDefaultUrl = value => this.defaultPath = value;
    $get = ["$q", "$location", function ($q, $location) {
        return {
            responseError: (response) => {
                if (response.status == 401) {
                    this.lastPath = $location.path();
                    $location.path(this.loginUrl);
                }
                return $q.reject(response);
            },
            redirectToLogin: () => {
                this.lastPath = $location.path();
                $location.path(this.loginUrl);
            },
            redirectPreLogin: () => {
                if (this.lastPath) {
                    $location.path(this.lastPath);
                    this.lastPath = "";
                } else {
                    $location.path(this.defaultPath);
                }            
            }
        };
    }];
}

angular.module("loginRedirect",[]).provider("loginRedirect", [LoginRedirectProvider])
    .config(["$httpProvider", $httpProvider => $httpProvider.interceptors.push("loginRedirect") ]);