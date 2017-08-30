import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/dataStorage.service';
import {Response} from '@angular/http';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }
  ngOnInit() {
  }
  saveDate() {
    this.dataStorageService.storeRecipe().subscribe((response: Response) => {
      console.log(response);
    });
  }
  fetchData() {
    this.dataStorageService.fetchRecipes();
  }
  logout() {
    this.authService.logout();
  }
}
