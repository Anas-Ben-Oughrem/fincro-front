import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import {Microcredit} from '../../Models/microcredit'
@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  @Input() credit !: Microcredit ;
  progression !:any;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    console.log(this.credit.status);
    this.progression = Math.trunc( 100 - (this.credit.amountRemaining/this.credit.amountCredit)*100);
    
  }

}
