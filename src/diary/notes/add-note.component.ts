import {Component} from "@angular/core";
import {ControlGroup, FormBuilder, Validators, FORM_DIRECTIVES} from '@angular/common'
import {NoteService} from './note.service';
import {Note} from './note';

@Component({
    selector: 'o-add-note',
    templateUrl: 'templates/diary/notes/add-note.tpl.html',
    directives: [FORM_DIRECTIVES]
})
export class AddNoteComponent {
    addNoteForm: ControlGroup;
    note: Note;

    constructor(builder: FormBuilder, private noteService: NoteService) {
        this.addNoteForm = builder.group({
            text: ["", Validators.required]
        });
    }

    addNote():any {
        if (this.addNoteForm.dirty && this.addNoteForm.valid) {
            this.noteService.push(
                new Note(new Date(), this.addNoteForm.value.text)
            );
        }
        console.log(new Note(new Date(), this.addNoteForm.value.text));
    }
}
