import { Component, VERSION, ViewChild } from '@angular/core';
import { BoomComponent } from './boom/boom.component';
import { ModalService } from './modal.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private modalService: ModalService) {}

  name = 'Angular ' + VERSION.major;

  ngAfterViewInit() {
    this.modalService.display(BoomComponent);
  }

  loadComponent(component: any) {}
}
