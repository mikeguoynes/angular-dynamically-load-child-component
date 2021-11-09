import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appChildView]',
})
export class ChildViewDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
