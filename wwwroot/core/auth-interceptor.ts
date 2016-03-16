require("./store");

class AuthInterceptor {

    constructor(private store) {
        store.subscribe(state => this.storeOnChange(state));
    }

    static createInstance = store => new AuthInterceptor(store);

    storeOnChange = state => { this.token = state.token };

    public request = (config) => {
        if (this.token) 
            config.headers.Authorization = "Bearer " + this.token;
        
        return config;
    }

    token;
}

angular.module("authInterceptor", ["store"])
    .factory("authInterceptor", ["store", store => new AuthInterceptor(store)])
    .config(["$httpProvider", $httpProvider => $httpProvider.interceptors.push("authInterceptor")]);