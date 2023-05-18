import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-structure1';
  objects={
    totalRecords:100,
    singlePageRecords:10
  }
}
