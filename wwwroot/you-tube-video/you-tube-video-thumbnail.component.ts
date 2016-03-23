import { CanActivate, Component, ChangeDetectionStrategy } from "../core";

@Component({
    templateUrl: "wwwroot/you-tube-video/you-tube-video-thumbnail.component.html",
    styleUrls: ["wwwroot/you-tube-video/you-tube-video-thumbnail.component.css"],
    selector: "you-tube-video-thumbnail",
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: ["alt?","videoId?"]
})
export class YouTubeVideoThumbnailComponent {
    constructor() {        }
    videoId: string;
    src: string = "http://img.youtube.com/vi/${this.videoId}/0.jpg";
    alt: string;
}