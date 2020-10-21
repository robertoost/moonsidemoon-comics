import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { myTransition } from '../shared/animations/animations';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [myTransition]
})
export class NavigatorComponent {
  public pages: {[key: string]: string} = {
    '': 'Comics',
    'about': 'About'
  }

  getState( outlet: RouterOutlet ) {
    return outlet.activatedRouteData.state;
  }
}