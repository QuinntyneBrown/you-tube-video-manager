export class LoginService {
    constructor(private $q: angular.IQService, private apiEndpoint, private fetch, private formEncode) { }

    tryToLogin = options => {
        var deferred = this.$q.defer();
        angular.extend(options.data, { grant_type: "password" });
        var formEncodedData = this.formEncode(options.data);
        var headers = { "Content-Type": "application/x-www-form-urlencoded" };
        this.fetch.fromService({ method: "POST", url: this.baseUri + "/token", data: formEncodedData, headers: headers }).then(function (results) {
            deferred.resolve(results.data);
        }).catch(function (error) {
            deferred.resolve(error);
        });
        return deferred.promise;
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/user"; }

}
