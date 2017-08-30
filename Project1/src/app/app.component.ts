import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Recipe Book';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCcgdb6Qlt8NEvmvWDHQ2UkX5fabr_PO78',
      authDomain: 'recipe-book-de369.firebaseapp.com',
    });
  }


  /*recipe = true;
  shopList = false;
  onSelction(selection: String) {
    if (selection === 'recipe') {
      this.recipe = true;
      this.shopList = false;
    }else {
      this.recipe = false;
      this.shopList = true;
    }
  }*/
}
