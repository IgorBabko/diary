import {Component} from '@angular/core'
import {NoteListComponent} from './notes/note-list.component';

@Component({
    selector: 'diary',
    templateUrl: 'templates/diary/index.tpl.html',
    directives: [NoteListComponent]
})
export class DiaryComponent {}
