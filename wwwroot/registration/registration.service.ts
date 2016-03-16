import { BaseService } from "../core/service";

export class RegistrationService  {
    constructor(private $q: angular.IQService, private apiEndpoint, private fetch) { }

    register = options => {
        let deferred = this.$q.defer();
        this.fetch.fromService({ method: "POST", url: this.baseUri + "/register", data: options.data })
            .then(results => deferred.resolve(results.data));
        return deferred.promise;
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/user"; }

}
