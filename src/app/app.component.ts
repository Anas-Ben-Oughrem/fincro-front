import { AuthService } from './homepage/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService : AuthService){}
  authenticated:boolean=this.authService.IsLoggedIn();
  ngOnInit(): void {
    //localStorage.removeItem('token');
    this.authenticated=this.authService.IsLoggedIn();
  }
}
