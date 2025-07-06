import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StartPage } from "./start-page/start-page";


@Component({
  selector: 'app-root',
  imports: [StartPage],
  templateUrl: './app.html',
  styleUrls: ['./app.css']

})
export class App {
  protected title = 'by-them';
}
