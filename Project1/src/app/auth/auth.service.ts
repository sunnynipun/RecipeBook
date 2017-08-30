import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) {}
  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
  }
  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((respone) => {
        this.router.navigate(['/']);
      firebase.auth().currentUser.getIdToken().then((token: string) => {
         this.token = token;
        console.log('Login Successfull and token ID is ' + this.token);
        });
      })
      .catch((error) => console.log(error));
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }
  isAuthenticated() {
    return (this.token != null);
  }
  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
