import {Injectable} from '@angular/core'
import {Note} from "./note.model";

@Injectable()
export class NoteService {
    
    private _notes:Note[] = [
        new Note(new Date(), 'first item'),
        new Note(new Date(), 'second item'),
        new Note(new Date(), 'third item')
    ];

    public getNotes() {
        return this._notes;
    }
}
