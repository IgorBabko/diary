import { bootstrap }    from '@angular/platform-browser-dynamic';
import { FORM_DIRECTIVES } from '@angular/common'
import { AppComponent } from './app.component';
import { NoteService } from './diary/notes/note.service';

bootstrap(AppComponent, [FORM_DIRECTIVES, NoteService]);
