import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MicrocreditService } from './../../Services/MicroCredit/microcredit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-credits',
  templateUrl: './my-credits.component.html',
  styleUrls: ['./my-credits.component.css']
})
export class MyCreditsComponent implements OnInit {
  user=localStorage.getItem('id');
  listCredits : any = [];
  constructor(private service:MicrocreditService,public router: Router) { }

  ngOnInit(): void {
    
    this.service.getMicroCreditsByUser(this.user).subscribe(
      data => {
        console.log(data);
        this.listCredits=data;
      }
    )
  }

  /*showDetails(){
    this.router.navigate(['/creditdetails']);
  }*/

}
