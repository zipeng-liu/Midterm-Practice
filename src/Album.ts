import { Artist } from './Artist';
import { Song } from './Song';

export class Album {
	private _title: string;
	private _artist: Artist; 
	private _releasedYear: number;
	private _tracks: Song[];

	constructor(title: string, artist: Artist, year: number) {
		this._title = title;
		this._artist = artist;
		this._releasedYear = year;
		this._tracks = [];
	}

	get title(): string {
		return this._title;
	}

	set title(newTitle: string) {
		this._title = newTitle;
	}

	get tracks(): Song[] {
		return this._tracks;
	}

	addTrack(newTrack: Song) {
		this._tracks.push(newTrack);
	}
}