import { Component } from '@angular/core'
import {NoteService} from './note.service';
import {NoteComponent} from './note.component';
import {AddNoteComponent} from './add-note.component';

@Component({
    selector: 'o-note-list',
    templateUrl: 'templates/diary/notes/note-list.tpl.html',
    providers: [NoteService],
    directives: [AddNoteComponent, NoteComponent]
})
export class NoteListComponent {
    constructor(private _noteService: NoteService) {}
}
