import { Component } from '@angular/core';
import data from '../data/profile-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-amitkulkarni';
  data = data;
}
