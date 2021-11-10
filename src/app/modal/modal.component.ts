import { CommonModule } from '@angular/common';
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BoomComponent } from '../boom/boom.component';
import { ChildViewDirective } from '../child-view.directive';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @ViewChild(ChildViewDirective) childComponentHost: ChildViewDirective;
  childComponent?: any;
  works?: boolean = true;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private modalService: ModalService,
    private injector: Injector,
    private app: ApplicationRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.createModalComponent(this.childComponent);
    }, 1000);
  }

  createModalComponent(childComponent: any) {
    let factory =
      this.componentFactoryResolver.resolveComponentFactory(BoomComponent);

    let newNode = document.createElement('child-app-comp');
    newNode.id = 'placeholder';
    document.querySelector('#childComponent').appendChild(newNode);

    const ref = factory.create(this.injector, [], newNode);

    this.app.attachView(ref.hostView);
  }
}
