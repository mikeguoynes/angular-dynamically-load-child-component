import { CommonModule } from '@angular/common';
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChildViewDirective } from '../child-view.directive';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @ViewChild(ChildViewDirective) childComponentHost: ChildViewDirective;
  childComponent?: any; // SET IN THE SERVICE WHEN YOU CREATE THE INSTANCE.
  works?: boolean = true;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.createModalComponent();
  }

  createModalComponent() {
    let factory = this.componentFactoryResolver.resolveComponentFactory(
      this.childComponent
    );

    let newNode = document.createElement('child-modal-component');
    document.querySelector('#childComponent').appendChild(newNode);

    const ref = factory.create(this.injector, [], newNode);

    this.app.attachView(ref.hostView);
  }
}
