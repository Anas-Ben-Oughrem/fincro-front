import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FullComponent } from 'src/app/layouts/full/full.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : AuthService, private router : Router){

  }
  canActivate(){
   if(this.auth.IsLoggedIn()){
    return true;
   }
    //this.fullComponent.authenticated=false;
    this.router.navigate(['login']);
    return false;
  }
  
}
