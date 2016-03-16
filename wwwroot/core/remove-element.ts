export var removeElement = (options: any) => {
    if (options.nativeHTMLElement) {
        var $target = angular.element(options.nativeHTMLElement);
        options.nativeHTMLElement.parentNode.removeChild(options.nativeHTMLElement);
        $target.remove();
        delete options.nativeHTMLElement;
    }
}

angular.module("removeElement",[]).value("removeElement", removeElement);