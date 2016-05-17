import { Component } from '@angular/core'
import {NoteService} from "./note.service";
import {OnInit} from "angular2/core";

@Component({
    selector: 'note-list',
    template: `
        <h1>Note list</h1>
        <ul>
            <li *ngFor="let note of _noteService.getNotes()">Date: {{ note._time | date:'short' }} {{ note._text }}</li>
        </ul>
    `,
    providers: [NoteService]
})
export class NoteListComponent implements OnInit {

    constructor(private _noteService: NoteService) {}
    
    ngOnInit() {
        console.log(this._noteService);
    }
}
