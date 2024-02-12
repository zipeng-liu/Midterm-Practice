export class Song {
	private _title: string;
	
	constructor(title: string) {
		this._title = title;
	}

	set title(newTitle: string) {
		this._title = newTitle;
	}
}