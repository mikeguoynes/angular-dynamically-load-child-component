import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ChildViewDirective } from './child-view.directive';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal/modal.component';
import { BoomComponent } from './boom/boom.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ModalComponent,
    BoomComponent,
    ChildViewDirective,
  ],
  entryComponents: [],
  providers: [ModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
