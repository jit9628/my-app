import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarcomponentComponent } from './components/navbarcomponent/navbarcomponent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponentComponent } from './components/sign-up-component/sign-up-component.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SignUpServiceService } from './service/sign-up-service.service';
import { HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    NavbarcomponentComponent,
    SignUpComponentComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SignUpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
