import { FullComponent } from 'src/app/layouts/full/full.component';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/homepage/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  constructor(private fullComponent : FullComponent){}
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('fullname');
    console.log(localStorage.getItem('token'));
    this.fullComponent.authenticated=!!localStorage.getItem('token');
  }
  
}
