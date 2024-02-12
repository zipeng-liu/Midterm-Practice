import { Album } from './Album';

export class Artist {
	private _name: string;
	private _albums: Album[];
	
	constructor(name: string) {
		this._name = name;
		this._albums = [];
	}

	get name() {
		return this._name;
	}

	addAlbum(album: Album) {
		this._albums.push(album);
	}
}