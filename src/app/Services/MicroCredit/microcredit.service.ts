import { Microcredit } from './../../Models/microcredit';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicrocreditService {
  url="http://localhost:8081/SpringMVC/"
  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getMicroCredits():Observable<Microcredit>{
    //this.url = this.url + "getAllCredits";
    return this.http.get<Microcredit>(this.url+ "getAllCredits");
  }
  getMicroCreditsByUser(id:any):Observable<Microcredit>{
    //this.url = this.url + "getAllCredits";
    return this.http.get<Microcredit>(this.url+ "getAllCreditsByUserId/"+id);
  }

  addMicroCredit(c:any,id:any):Observable<Microcredit>{
    //this.url = this.url + "addCredit/" + id;
    return this.http.post<Microcredit>(
          this.url + "addCredit/" + id,
          JSON.stringify(c),
          this.httpOptions
        );
    //return this.http.post(this.url,c);
  }

  getMicroCreditById(id:any):Observable<Microcredit>{
    //this.url = this.url + "getCredit/"+id;
    return this.http.get<Microcredit>(this.url+ "getCredit/"+id);
  }

  simulation(amount:any,period:any,type:any){
    //this.url = this.url + "simulator/"+amount+"/"+period+"/"+type;
    /*const params = new HttpParams()
   .set('amount', amount)
   .set('period', period)
   .set('typePeriod',type);*/
    return this.http.get(this.url+ "simulator/"+amount+"/"+period+"/"+type/*, {params}*/);
  }

  capacityToPay(id:any,amount:any){

    return this.http.get(this.url+ "CapacityToPay/"+id+"/"+amount);
  }

  updateCredit(c:any,id:any):Observable<Microcredit>{
    return this.http.put<Microcredit>(
          this.url + "updateCredit/"+id,
          JSON.stringify(c),
          this.httpOptions
        );
  }

  updateCreditStatus(c:any,id:any,status:any):Observable<Microcredit>{
    return this.http.put<Microcredit>(
          this.url + "updateCreditStatus/"+id+"/"+status,
          JSON.stringify(c),
          this.httpOptions
        );
  }
}

