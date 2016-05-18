import { Component } from '@angular/core'
import {NoteService} from './note.service';
import {NoteComponent} from './note.component';

@Component({
    selector: 'o-note-list',
    templateUrl: 'templates/notes/note-list.tpl.html',
    providers: [NoteService],
    directives: [NoteComponent]
})
export class NoteListComponent {
    constructor(private _noteService: NoteService) {}
}
