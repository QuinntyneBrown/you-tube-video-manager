import { $q } from "./$q";

/**
 * @description Append To Body Asynchrously
 * @param options
 */
export var appendToBodyAsync = (options: any) => {
    var deferred = $q.defer();
    document.body.appendChild(options.nativeElement);
    setTimeout(() => { deferred.resolve(); }, options.wait || 100);
    return deferred.promise;
}


angular.module("appendToBodyAsync", []).value("appendToBodyAsync", appendToBodyAsync);
