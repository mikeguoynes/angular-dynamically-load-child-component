import {
  Component,
  ComponentFactoryResolver,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
// https://stackoverflow.com/questions/48330760/cannot-read-property-viewcontainerref-of-undefined
@Component({
  selector: 'hello',
  template: `
  <h1>Load Child Dynamically</h1>
  <ng-template #dynamicComponent></ng-template>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  @ViewChild('dynamicComponent', { read: ViewContainerRef }) myRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {}

  loadChild(c: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(c);
    const ref = this.myRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}
