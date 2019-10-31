import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {NodeComponent} from './node/node.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MessagesComponent} from './messages/messages.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GartnerComponent } from './gartner/gartner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NodeComponent,
    MessagesComponent,
    GartnerComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
