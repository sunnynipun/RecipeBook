import {NgModule} from '@angular/core';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';
import {AuthRoutingModule} from './authRouting.module';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent],
  imports: [FormsModule, AuthRoutingModule]
})
export class AuthModule {}
