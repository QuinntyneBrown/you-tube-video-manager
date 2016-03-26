import { BaseService } from "../core/service";

export class YouTubeVideoService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q, apiEndpoint, fetch)
    }

    getByVideoId(options) {
        let deferred = this.$q.defer();
        this.fetch.fromService({ method: "GET", url: this.baseUri + "/getByVideoId", params: { id: options.id } })
            .then(results => deferred.resolve(results.data));
        return deferred.promise;
    };


    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/youTubeVideo"; }

}
