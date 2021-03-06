﻿require("./core/core.module");
require("./router-outlet/router-outlet.module");

require("./app/app.module");
require("./backdrop/backdrop.module");
require("./button/button.module");

require("./header/header.module");
require("./modal/modal.module");
require("./tabs/tabs.module");
require("./login/login.module");
require("./registration/registration.module");
require("./home-page/home-page.module");
require("./watch-history/watch-history.module");
require("./footer/footer.module");
require("./fly-out/fly-out.module");

require("./about/about.module");
require("./search/search.module");
require("./you-tube-video/you-tube-video.module");
require("./tag/tag.module");
require("./flip-card/flip-card.module");
require("./playlist/playlist.module");
require("./collection/collection.module");
require("./feedback/feedback.module");
require("./speaker/speaker.module");
require("./account/account.module");
require("./contact-info/contact-info.module");
require("./profile/profile.module");
require("./profile-setting/profile-setting.module");
require("./photo/photo.module");
require("./log-entry/log-entry.module");
require("./slide/slide.module");
require("./image-button/image-button.module");

var app: any = angular.module("app", [
    "app.core",
    "app.routerOutlet",

    "app.about",
    "app.app",
    "app.backdrop",
    "app.button",
    "app.header",
    "app.footer",
    "app.tabs",
    "app.login",
    "app.modal",
    "app.homePage",
    "app.registration",
    "app.tag",
    "app.flipCard",
    "app.collection",
    "app.playlist",
    "app.youTubeVideo",
    "app.speaker",
    "app.watchHistory",
    "app.photo",
    "app.feedback",
    "app.logEntry",
    "app.search",
    "app.slide",
    "app.imageButton",

    "ui.tinymce"
]);

app.config(["initialStateProvider", "localStorageManagerProvider", (initialStateProvider, localStorageManagerProvider) => {
    var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
    if (!localStorageInitialState)
        localStorageManagerProvider.put({
            name: "initialState", value: {
            }
        });

    initialStateProvider.configure(localStorageManagerProvider.get({ name: "initialState" }));
}]);

app.config(["$routeProvider", ($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider
        .when("/", { template: "<home-page></home-page>" })
        .when("/register", { template: "<registration-page></registration>" })
        .when("/login", { template: "<login-container></login-container>" })
        .when("/register", { template: "<registration-page></registration-page>" })
        .when("/feedback", { template: "<feedback-page></feedback-page>" })
        .when("/about", { template: "<about-container></about-container>" })
        .when("/collections", { template: "<collections-feature-container></collections-feature-container>" }) 
        .when("/youtubevideo/play/:youTubeVideoId", { template: "<you-tube-video-player-page></you-tube-video-player-page>" });       

    $routeProvider
        .when("/admin", { template: "<div></div>" })
        .when("/admin/collection/edit/:collectionId", { template: "<collections-page></collections-page>" })
        .when("/admin/collections", { template: "<collections-page></collections-page>" })
        .when("/admin/feedback/edit/:feedbackId", { template: "<feedbacks-page></feedbacks-page>" })
        .when("/admin/feedbacks", { template: "<feedbacks-page></feedbacks-page>" })   
        .when("/admin/playlist/edit/:playlistId", { template: "<playlists-page></playlists-page>" })
        .when("/admin/playlists", { template: "<playlists-page></playlists-page>" })     
        .when("/admin/speaker/edit/:speakerId", { template: "<speakers-page></speakers-page>" })
        .when("/admin/speakers", { template: "<speakers-page></speakers-page>" })            
        .when("/admin/tag/edit/:tagId", { template: "<tags-page></tags-page>" })
        .when("/admin/tags", { template: "<tags-page></tags-page>" })
        .when("/admin/youtubevideo/edit/:youTubeVideoId", { template: "<you-tube-videos-page></you-tube-videos-page>" })
        .when("/admin/youtubevideos", { template: "<you-tube-videos-page></you-tube-videos-page>" });
    
        $routeProvider.otherwise("/");
}]);

app.config(["apiEndpointProvider", (apiEndpointProvider) => {
    apiEndpointProvider.configure("/api");    
}]);

app.config(["loginRedirectProvider", (loginRedirectProvider) => {
    loginRedirectProvider.setDefaultUrl("/");
}]);

