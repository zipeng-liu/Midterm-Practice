

export class PlaylistImporter {
	private _title: string;
	
	constructor(title: string) {
		this._title = title;
	}

	set title(newTitle: string) {
		this._title = newTitle;
	}
}


// A PlaylistImporter takes in its constructor an importer of type IImportable.

// A PlaylistImporter has an importPlaylist method that calls a loadPlaylist
// method from the importer. EVERY IMPORTER must have this method. 