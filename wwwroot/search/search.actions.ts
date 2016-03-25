import { IDispatcher } from "../core/store";

export class SearchActionCreator  {
    constructor(private dispatcher: IDispatcher, private searchService, private guid) { }    

    public query = options => {
        var newId = this.guid();
        this.searchService.query({ term: options.term })
            .then(results => this.dispatcher.dispatch(new SearchQueryAction(newId, options.term, results)));
        return newId;
    }
}

export class SearchQueryAction { constructor(public id, public term, public results) { } }
