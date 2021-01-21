import { Component,  ChangeDetectionStrategy, } from '@angular/core';
import {enableProdMode} from '@angular/core';

enableProdMode();

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LojaUnit';
}


