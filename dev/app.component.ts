import {Component} from '@angular/core';
import { NoteListComponent } from './notes/note-list.component';
import {NewNoteComponent} from './notes/new-note.component';

@Component({
    selector: 'diary',
    templateUrl: 'templates/app.tpl.html',
    directives: [NewNoteComponent, NoteListComponent]
})
export class AppComponent {

}
