import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {NodeComponent} from './node/node.component';
import {HttpClientModule} from '@angular/common/http';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NodeComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
