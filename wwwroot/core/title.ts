export class TitleService {
    getTitle = () => {
        return document.title;
    }

    setTitle = (options: ISetTitleOptions) => {
        document.title = options.value;
    }
}

export interface ISetTitleOptions {
    value: string;
}

angular.module("title", [])
    .service("title", [TitleService]);