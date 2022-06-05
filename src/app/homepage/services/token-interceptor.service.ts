import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from'@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const r1 ="http://localhost:8081/SpringMVC/api/users/login/";
    const r2 ="http://localhost:8081/SpringMVC/api/users/register";
    console.log("verif :",req.url.search(r1))
    if (req.url.search(r1)== -1 && req.url.search(r2) == -1){
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return next.handle(tokenizedReq);}
    else {return next.handle(req);}
  }
}
