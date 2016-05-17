import { Component } from '@angular/core'
import {NoteService} from "./note.service";

@Component({
    selector: 'note-list',
    template: `
        <h1>Note list</h1>
        <ul>
            <li *ngFor="let note of _noteService.getNotes()">{{ note }}</li>
        </ul>
    `,
    providers: [NoteService]
})
export class NoteListComponent {

    constructor(private _noteService: NoteService) {}
}
