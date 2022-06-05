import { Microcredit } from '../../Models/microcredit';
import { CreditDetailsComponent } from '../credit-details/credit-details.component';
import { Component, OnInit , Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MicrocreditService } from 'src/app/Services/MicroCredit/microcredit.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-capacity-to-pay',
  templateUrl: './capacity-to-pay.component.html',
  styleUrls: ['./capacity-to-pay.component.css']
})
export class CapacityToPayComponent implements OnInit {
  amount !:any;
  period :any =0;
  credit !:any;
  constructor(public dialogRef: MatDialogRef<CreditDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Microcredit,private service:MicrocreditService,public router: Router) { }

  ngOnInit(): void {
    this.loadCredit(this.data.idCredit);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  loadCredit(id:any) {
    return this.service.getMicroCreditById(id).subscribe(
      data => {console.log(data);
      this.credit=data;}
    )
  }
  showPeriod(){
    this.service.capacityToPay(this.data.idCredit,this.amount)
    .subscribe(p => {
      console.log(p);
      this.period = p;
      console.log(this.credit);
      //this.data.period=p;
     
    })
  }

  Accept(){
    this.credit.period = this.period;
    this.credit.payedAmount = this.amount;
    this.credit.idAccount = 1;
    this.service.updateCredit(this.credit,1)
    .subscribe(p => {
      console.log(p);
     // this.period = p;
      //this.data.period=p;
      this.dialogRef.close();
     
    })
  }
}
