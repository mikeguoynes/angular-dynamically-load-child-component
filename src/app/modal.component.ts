import {
  Component,
  ComponentFactoryResolver,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ChildViewDirective } from './child-view.directive';
// https://stackoverflow.com/questions/48330760/cannot-read-property-viewcontainerref-of-undefined
@Component({
  selector: 'hello',
  template: `
  <h1>Load Child Dynamically</h1>
  <ng-template appChildView></ng-template>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class ModalComponent {
  @Input() name: string;
  @ViewChild(ChildViewDirective, { static: true }) adHost!: ChildViewDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {}

  loadChild(c: any) {
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<any>(c);
  }
}
