import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalComponent } from './hello.component';
import { ChildViewDirective } from './child-view.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ModalComponent, ChildViewDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
