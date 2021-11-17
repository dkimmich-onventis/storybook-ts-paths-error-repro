import { Component } from '@angular/core';
import { myText } from 'reusable-stuff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = myText;
}
