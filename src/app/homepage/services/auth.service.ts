import { AppSidebarComponent } from './../../layouts/full/sidebar/sidebar.component';
import { FullComponent } from './../../layouts/full/full.component';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token, Login, User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
token!:JSON;
loadedUser!:JSON;
user!:User;
  login(user:Login):Observable<Token>{
    localStorage.removeItem('token');
    console.log(!!localStorage.getItem('token'));
    console.log(user);
    
    return this.http.get<Token>("http://localhost:8081/SpringMVC/api/users/login/"+user.username+"/"+user.password);
    /*
    .subscribe(response => {
      console.log("in response !")
      localStorage.setItem('token',response.token);
      console.log(localStorage.getItem('token'));
      return true;

    },err => {console.log(err);
    return false });
     return (!!localStorage.getItem('token'));*/
  }

  loadUser(username:String){
    this.http.get<any>("http://localhost:8081/SpringMVC/api/users/find/"+username).subscribe(response => {
      this.loadedUser=response;
      this.user=response;
      localStorage.setItem('fullname',this.user.lastName+" "+this.user.firstName);
      localStorage.setItem('id',this.user.userId);
      console.log("full name :",localStorage.getItem('fullname'));
      console.log("user loaded successfully :",response);
     
    }, err => {console.log("error in loading user : ",err)})
  }

  register(user:User){
    return this.http.post("http://localhost:8081/SpringMVC/api/users/register",user); 
  }

  IsLoggedIn(){
    return !!localStorage.getItem('token');
  }
}
