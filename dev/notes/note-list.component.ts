import { Component } from '@angular/core'

@Component({
    selector: 'note-list',
    template: `
        <h1>Note list</h1>
        <ul>
            <li *ngFor="let note of notes">{{ note }}</li>
        </ul>
    `
})
export class NoteListComponent {
    notes = ['item1', 'item2', 'item3'];
}
