import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {SharedModule} from './shared/shared.module';
import {ShoppingModule} from '../Shopping/shopping-list/shopping.module';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {NgModule} from '@angular/core';

@NgModule ({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    ShoppingModule,
    CoreModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
