import { Component, VERSION, ViewChild } from '@angular/core';
import { BoomComponent } from './boom/boom.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('helloComp', { static: false }) helloComp;
  name = 'Angular ' + VERSION.major;

  ngAfterViewInit() {
    this.helloComp.loadChild(BoomComponent);
  }
}
