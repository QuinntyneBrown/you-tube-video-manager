import * as actions from "./modal.actions";

export class Modal {
    constructor(private $compile,
        private $q,
        private $rootScope,
        private appendToBodyAsync,
        private backdrop,
        private extendCssAsync,
        private removeElement,
        private setOpacityAsync,
        private store) {

        store.subscribe(this.storeOnChange);
    }

    storeOnChange = state => [ this.html, this.isOpen ] = [ state.modelHtml, state.isModalOpen ];
    
    _html: string;

    get html() { return this._html; }

    set html(value: string) { this._html = value; }

    _isOpen:boolean = false;

    get isOpen() { return this._isOpen; }

    set isOpen(value: boolean) {
        if (value && !this._isOpen)
            this.openAsync();

        if (!value && this._isOpen)
            this.closeAsync();

        this._isOpen = value;
    }

    openAsync = () => {        
        var openAsyncFn = () => {
            return this.initializeAsync()
                .then(this.backdrop.openAsync)
                .then(this.appendModalToBodyAsync)
                .then(this.showAsync);
        }
        setTimeout(openAsyncFn, 100);
    }

    initializeAsync = () => {
        var deferred = this.$q.defer();
        this.compileAsync().then(() => {
            this.nativeElement = this.augmentedJQuery[0];
            this.extendCssAsync({
                nativeHTMLElement: this.nativeElement,
                cssObject: {
                    "opacity": "0",
                    "position": "fixed",
                    "margin-top": "-300px",
                    "top": "0",
                    "left": "0",
                    "background-color": "#FFF",
                    "display": "block",
                    "z-index": "999",
                    "width": "100%",
                    "padding": "30px",
                    "transition": "all 0.5s",
                    "-webkit-transition": "all 0.5s",
                    "-o-transition": "all 0.5s"
                }


            }).then(function () {
                deferred.resolve();
            });

        });
        return deferred.promise;
    }

    compileAsync = () => {
        var deferred = this.$q.defer();
        this.$scope = this.$rootScope.$new();
        this.augmentedJQuery = this.$compile(angular.element(this.html))(this.$scope);
        setTimeout(() => {
            this.$scope.$digest()
            deferred.resolve();
        }, 100);
        return deferred.promise;
    }
    
    appendModalToBodyAsync = () => this.appendToBodyAsync({ nativeElement: this.nativeElement });

    showAsync = () => this.extendCssAsync({
        nativeHTMLElement: this.nativeElement,
        cssObject: {
            "opacity": "100",
            "margin-top": "0px",
        }
    });

    closeAsync = () => {
        if (!this.pinned) {
            var deferred = this.$q.defer();            
            try {
                this.extendCssAsync({
                    nativeHTMLElement: this.nativeElement,
                    cssObject: {
                        "opacity": "0",
                    }
                })
                    .then(this.backdrop.closeAsync)
                    .then(() => {
                        this.augmentedJQuery[0].parentNode.removeChild(this.augmentedJQuery[0]);
                        deferred.resolve();
                    });
            } catch (error) {
                deferred.resolve();
            }
            return deferred.promise;
        }
    }

    dispose = () => { }

    togglePin = () => {
        if (this.pinned) {
            this.pinned = false;
            this.closeAsync();
        } else {
            this.pinned = true;
        }
    }
    options;
    $scope;
    augmentedJQuery;
    nativeElement;
    
    pinned = false;
}
