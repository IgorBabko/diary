import {Component} from "@angular/core";

@Component({
    selector: 'show-note',
    template: `
        <div>
            <form action="#">
                <div>
                    <label for="text">Text:</label><br>
                    <textarea id="text"></textarea>
                </div>
                <button type="submit">Save</button>
            </form>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    `
})
export class EditNoteComponent {

}
