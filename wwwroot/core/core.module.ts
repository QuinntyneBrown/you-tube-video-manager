/// <reference path="../../typings/tsd.d.ts" />

require("./core.css");
require("../../lib/rx.all.compat.min")

require("./local-storage-manager-provider");
require("./store");

require("./add-or-update");
require("./api-endpoint-provider");
require("./append-to-body-async");
require("./extend-css-async");
require("./fetch");
require("./form-encode");
require("./invoke-async");
require("./login-redirect-provider");
require("./safe-digest");
require("./component-extension");
require("./remove-element");
require("./route-resolver");
require("./route-when-extension");
require("./set-opacity-async");
require("./auth-interceptor");
require("./context-document");
require("./renderer");
require("./title");

var app = (<any>angular.module("app.core", [
    "ngSanitize",

    "addOrUpdate",
    "appendToBodyAsync",
    "apiEndpoint",
    "authInterceptor",
    "contextDocument",
    "extendCssAsync",
    "fetch",
    "formEncode",
    "invokeAsync",
    "localStorageManager",
    "loginRedirect",
    "removeElement",
    "renderer",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest",
    "setOpacityAsync",
    "store",
    "title"
]));
