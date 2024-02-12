import { IImportable } from "./IImportable";
import fs from 'fs';

export class LocalImporter implements IImportable {
	private _filename: string;
	
	constructor(filename: string) {
		this._filename = filename;
	}

	
}