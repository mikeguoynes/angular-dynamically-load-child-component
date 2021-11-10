import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
} from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Injectable()
export class ModalService {
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef
  ) {}

  display(childComponent: any) {
    this.createModalComponent(childComponent);
  }

  createModalComponent(childComponent: any) {
    let factory = this.resolver.resolveComponentFactory(ModalComponent);

    let newNode = document.createElement('modal-comp');
    newNode.id = 'placeholder';
    document.querySelector('body').appendChild(newNode);

    const ref = factory.create(this.injector, [], newNode);
    ref.instance.childComponent = childComponent;
    this.app.attachView(ref.hostView);
  }
}
