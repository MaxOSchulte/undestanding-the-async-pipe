import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReferenceComponent} from './reference/reference.component';
import {SmartComponent} from './smart/smart.component';
import {SmartAsyncComponent} from './smart-async/smart-async.component';

@NgModule({
  declarations: [
    AppComponent,
    ReferenceComponent,
    SmartComponent,
    SmartAsyncComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
