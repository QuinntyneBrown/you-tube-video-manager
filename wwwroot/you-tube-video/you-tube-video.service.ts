import { BaseService } from "../core/service";

export class YouTubeVideoService extends BaseService {
    constructor($q: angular.IQService, apiEndpoint, fetch) {
        super($q, apiEndpoint, fetch)
    }

    get baseUri() { return this.apiEndpoint.getBaseUrl() + "/youTubeVideo"; }

}
