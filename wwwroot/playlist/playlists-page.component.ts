import { CanActivate, Component, ChangeDetectionStrategy } from "../core";
import * as actions from "./playlist.actions";
import { pluck } from "../core/pluck";
import { Playlist } from "./playlist.model";

@Component({
    routes: ["/admin/playlists","/admin/playlist/edit/:playlistId"],
    templateUrl: "wwwroot/playlist/playlists-page.component.html",
    styleUrls: ["wwwroot/playlist/playlists-page.component.css"],
    selector: "playlists-page",
    providers: ["$location","$routeParams","playlistActionCreator"]
})
@CanActivate(["$q", "$route", "invokeAsync", "playlistActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, playlistActionCreator: actions.PlaylistActionCreator) => {
    var playlistId = $route.current.params.playlistId;
    var promises = [invokeAsync(playlistActionCreator.all)];
    if (playlistId) { promises.push(invokeAsync({ action: playlistActionCreator.getById, params: { id: playlistId } })) };
    return $q.all(promises);
}])
export class PlaylistsPageComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private playlistActionCreator: actions.PlaylistActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.playlists;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentPlaylistAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/playlists");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentPlaylistAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/playlist/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemovePlaylistAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["playlistId"]), items: this.entities }) as Playlist;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/playlists"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["playlistId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["playlistId"]), items: this.entities }) as Playlist;
        } else {
            this.entity = new Playlist();
        }
    }

    edit = entity => this.playlistActionCreator.edit(entity);
    remove = entity => this.playlistActionCreator.remove(entity);
    create = entity => this.playlistActionCreator.create();
    addOrUpdate = options => this.playlistActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
