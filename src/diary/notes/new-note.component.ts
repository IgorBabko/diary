import {Component} from "@angular/core";

@Component({
    selector: 'o-new-note',
    template: `
        <h1>Add note</h1>
        <form action="#">
            <div>
                <label for="text">Text:</label><br>
                <textarea id="text"></textarea>
            </div>
            <button type="submit">Add</button>
        </form>
    `
})
export class NewNoteComponent {

}
