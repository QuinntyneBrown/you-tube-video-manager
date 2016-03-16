import * as actions from "./backdrop.actions";

export class Backdrop {
    constructor(
        private $q,
        private appendToBodyAsync: any,
        private extendCssAsync: any,
        private removeElement: any,
        private setOpacityAsync: any,  
        private store) {

        store.subscribe(this.storeOnChange);
        

    }

    public createInstance = (options: any) => {
        var instance = new Backdrop(this.$q, this.appendToBodyAsync, this.extendCssAsync, this.removeElement, this.setOpacityAsync, this.store);
        return instance;
    }

    public openAsync = () => {
        var deferred = this.$q.defer();

        this.initializeAsync()
            .then(this.appendBackDropToBodyAsync)
            .then(this.showAsync)
            .then(() => {
                this.isOpen = true;
                deferred.resolve();
            });

        return deferred.promise;
    }

    public closeAsync = () => {
        var deferred = this.$q.defer();
        this.hideAsync().then((results) => {
            this.dispose();
            this.isOpen = false;
            deferred.resolve();
        });
        return deferred.promise;
    }

    storeOnChange = state => {

    }

    public initializeAsync = () => {
        var deferred = this.$q.defer();

        this.augmentedJQuery = angular.element("<div></div>");

        this.extendCssAsync({
            nativeHTMLElement: this.nativeHTMLElement,
            cssObject: {
                "-webkit-transition": "opacity 300ms ease-in-out",
                "-o-transition": "opacity 300ms ease-in-out",
                "transition": "opacity 300ms ease-in-out",
                "opacity": "0",
                "position": "fixed",
                "top": "0",
                "left": "0",
                "height": "100%",
                "width": "100%",
                "background-color": "rgba(0, 0, 0, .25)",
                "display": "block"
            }
        }).then(() => {
            deferred.resolve();
        });

        return deferred.promise;
    }

    public showAsync = () => {
        return this.setOpacityAsync({ nativeHtmlElement: this.nativeHTMLElement, opacity: 25 });
    }

    public appendBackDropToBodyAsync = () => {
        return this.appendToBodyAsync({ nativeElement: this.nativeHTMLElement });
    }

    public hideAsync = () => {
        return this.setOpacityAsync({ nativeHtmlElement: this.nativeHTMLElement, opacity: 0 });
    }

    public dispose = () => {
        this.removeElement({ nativeHTMLElement: this.nativeHTMLElement });
        this.augmentedJQuery = null;
    }

    public get nativeHTMLElement(): HTMLElement { return this.augmentedJQuery[0]; }

    public augmentedJQuery: ng.IAugmentedJQuery;

    public isOpen: boolean = false;

    public isAnimating: boolean = false;
}
