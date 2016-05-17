import {Component} from '@angular/core';
import { NoteListComponent } from './notes/note-list.component';

@Component({
    selector: 'my-app',
    template: `
        <note-list></note-list>
    `,
    directives: [NoteListComponent]
})
export class AppComponent {

}
