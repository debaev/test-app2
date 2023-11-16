import { Component } from '@angular/core';
import { LoadingStateFacade } from './store/index.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public loadingFacade: LoadingStateFacade) {}
  title = 'test-app2';
}
