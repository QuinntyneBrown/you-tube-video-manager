import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "./you-tube-video.actions";

var YT: any;

@Component({
    templateUrl: "wwwroot/you-tube-video/you-tube-video-player.html",
    styleUrls: ["wwwroot/you-tube-video/you-tube-video-player.component.css"],
    selector: "you-tube-video-player",
    providers: ["$element", "$scope", "$window", "guid"],
    inputs: ["height", "width", "videoId"]
})
export class YouTubeVideoPlayerComponent {
    constructor(private $element: ng.IAugmentedJQuery,
        private $scope: ng.IScope,
        private $window: ng.IWindowService,
        private guid: Function) {
    }

    public ngOnInit = () => {

        var scriptTag = document.getElementById("youtube-player");

        if (!scriptTag)
            this.insertYoutubeScriptTag();
        
        if (scriptTag && !(<any>this.$window).YT) {
            setTimeout(this.onYouTubeIFrameApiReady, 300);
        } else if (scriptTag) {
            this.onYouTubeIFrameApiReady();
        }
        else {
            (<any>this.$window).onYouTubeIframeAPIReady = this.onYouTubeIFrameApiReady;
        }
    }

    public insertYoutubeScriptTag = () => {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.setAttribute("id", "youtube-player");
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    public onYouTubeIFrameApiReady = () => {
        this.player = new (<any>this.$window).YT.Player((<any>this.$element[0]), {
            playerVars: {
                autoplay: 0,
                theme: "light",
                color: "white",
                iv_load_policy: 3,
                showinfo: 1,
                controls: 1
            },
            height: this.height,
            width: this.width,
            videoId: this.videoId,
        });
    }

    public player: any;

    private _height: string;

    public get height() { return this._height; }

    public set height(value: string) {
        if (value && this._height && value != this._height)
            this.player.setSize(this.width, this.height);

        this._height = value;
    }

    private _width: string;

    public get width() { return this._width; }

    public set width(value: string) {
        if (value && this._width && value != this._width)
            this.player.setSize(this.width, this.height);

        this._width = value;
    }

    private _videoId: string;

    public get videoId() { return this._videoId; }

    public set videoId(value: string) {
        if (value && this._videoId && value != this._videoId)
            this.player.cueVideoById(value);

        this._videoId = value;
    }

    private dispose = () => {
        this.player.destroy();
        this.$element = null;
    }
}