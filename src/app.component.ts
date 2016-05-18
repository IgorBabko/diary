import {Component} from '@angular/core';
import {NavbarComponent} from './shared/navbar.component';
import {FooterComponent} from './shared/footer.component';
import {DiaryComponent} from './diary/index';

@Component({
    selector: 'organizer',
    templateUrl: 'templates/app.tpl.html',
    directives: [NavbarComponent, DiaryComponent, FooterComponent]
})
export class AppComponent {

}
