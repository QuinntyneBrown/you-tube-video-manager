import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "../modal/modal.actions";
import * as store from "../core/store";

@Component({
    templateUrl: "wwwroot/you-tube-video/you-tube-video-editor.component.html",
	styleUrls: ["wwwroot/you-tube-video/you-tube-video-editor.component.css"],
    selector: "you-tube-video-editor",
    inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
    viewProviders: ["dispatcher"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class YouTubeVideoEditorComponent {

    constructor(private dispatcher: store.IDispatcher) {}
        
    tagEntity = {};

    addOrUpdateTag = options => {
        this.entity.tags.push(options.data);
        this.tagEntity = {};
    }

    addTag = () => this.dispatcher.dispatch(new actions.OpenModalAction({ html: "<you-tube-video-tag-modal></you-tube-video-tag-modal>" }));

    entity;
}
