import {Injectable} from '@angular/core'

@Injectable()
export class NoteService {
    public getNotes() {
        return ['item1', 'item2', 'item3'];
    }
}
