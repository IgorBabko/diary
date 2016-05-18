import {Component, OnInit} from '@angular/core';
declare const jQuery:any;

@Component({
    selector: 'o-navbar',
    templateUrl: 'templates/navbar.tpl.html'
})
export class NavbarComponent implements OnInit {

    ngOnInit():any {
        //noinspection TypeScriptUnresolvedFunction
        jQuery('.button-collapse').sideNav();
    }
}
