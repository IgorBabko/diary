import {Component} from '@angular/core'
import {NoteListComponent} from './notes/note-list.component';
import {AddNoteComponent} from './notes/add-note.component';
import {EditNoteComponent} from './notes/edit-note.component';

@Component({
    selector: 'diary',
    templateUrl: 'templates/diary/index.tpl.html',
    directives: [NoteListComponent, AddNoteComponent, EditNoteComponent]
})
export class DiaryComponent {}
