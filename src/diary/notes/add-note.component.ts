import {Component OnInit} from "@angular/core";
import {ControlGroup} from '@angular/common'

@Component({
    selector: 'o-add-note',
    templateUrl: 'templates/diary/notes/add-note.tpl.html'
})
export class AddNoteComponent implements OnInit {
    addNoteForm: ControlGroup;

    constructor(private addNoteForm: ControlGroup) {

    }

    ngOnInit():any {
        this.addNoteForm.
    }

    onSubmit() {

    }
}
