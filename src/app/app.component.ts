import {Component} from '@angular/core';
import {Platform} from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public platform: Platform) {}
  isDarkTheme = true;
}
