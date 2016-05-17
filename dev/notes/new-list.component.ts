import {Component} from "angular2/core";

@Component({
    selector: 'new-note',
    template: `
        <h1>Add note</h1>
        <form action="#">
            <div>
                <label for="text">Text:</label>
                <input type="text" id="text">
            </div>
            <button type="submit">Add</button>
        </form>
    `
})
export class NewNoteComponent {

}
