import {Component} from '@angular/core';
import { NoteListComponent } from './notes/note-list.component';
import {NewNoteComponent} from "./notes/new-note.component";

@Component({
    selector: 'my-app',
    template: `
        <new-note></new-note>
        <note-list></note-list>
    `,
    directives: [NewNoteComponent, NoteListComponent]
})
export class AppComponent {

}
