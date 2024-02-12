import { Album } from './Album';
import { Song } from './Song';


export class Playlist {
	private _name: string;
	private _songs: Song[];
	
	constructor(name: string) {
		this._name = name;
		this._songs = [];
	}

	get name(): string {
		return this._name;
	}

	set name(newName: string) {
		this._name = newName;
	}

	get songs(): Song[] {
		return this._songs;
	}

	set songs(newSongList: Song[]) {
		this._songs = newSongList;
	}

	addAlbum(album: Album) {
		this._songs.concat(album.tracks);
	}
}

