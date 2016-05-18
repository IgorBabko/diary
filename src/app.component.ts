import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from './shared/navbar.component';
import {FooterComponent} from './shared/footer.component';
import {DiaryComponent} from './diary/index';

declare const jQuery:any;

@Component({
    selector: 'organizer',
    templateUrl: 'templates/app.tpl.html',
    directives: [NavbarComponent, DiaryComponent, FooterComponent]
})
export class AppComponent implements OnInit {

    ngOnInit():any {
        //noinspection TypeScriptUnresolvedFunction
        jQuery('.button-collapse').sideNav();
        //noinspection TypeScriptUnresolvedFunction
        jQuery('.delete-modal-trigger, .edit-modal-trigger').leanModal();
    }
}
