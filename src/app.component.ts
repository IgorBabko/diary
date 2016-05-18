import {Component} from '@angular/core';
import {NoteListComponent} from './notes/note-list.component';
import {NewNoteComponent} from './notes/new-note.component';
import {NavbarComponent} from './shared/navbar.component';
import {FooterComponent} from './shared/footer.component';


@Component({
    selector: 'diary',
    templateUrl: 'templates/app.tpl.html',
    directives: [NavbarComponent, NewNoteComponent, NoteListComponent, FooterComponent]
})
export class AppComponent {

}
