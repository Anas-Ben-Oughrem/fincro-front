import { CapacityToPayComponent } from '../capacity-to-pay/capacity-to-pay.component';
import { ActivatedRoute } from '@angular/router';
import { Microcredit } from './../../Models/microcredit';
import { MicrocreditService } from './../../Services/MicroCredit/microcredit.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-credit-details',
  templateUrl: './credit-details.component.html',
  styleUrls: ['./credit-details.component.css']
})
export class CreditDetailsComponent implements OnInit {
  name=localStorage.getItem('fullname');
  idCredit !:any;
  credit !: any;
  sim !: any;
  showSim = false;
  constructor(private service:MicrocreditService,private route: ActivatedRoute ,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.idCredit = this.route.snapshot.params['id'];
    this.loadCredit(this.idCredit);
    //this.simulation(this.credit.amountCredit,this.credit.period,this.credit.typePeriod);
  }

  loadCredit(id:any) {
    return this.service.getMicroCreditById(id).subscribe(
      data => {console.log(data);
      this.credit=data;}
    )
  }

  simulation(){
    this.service.simulation(this.credit.amountCredit,this.credit.period,this.credit.typePeriod)
    .subscribe((data:{})=>{
      console.log(data);
      this.sim = data;
      this.sim.splice(0,1);
      console.log(this.sim);
      /*for(let i in this.sim){
        console.log(this.sim[i].CRD);}*/
    })
  }

  show(){
    this.showSim = !this.showSim;
    if(this.showSim==true){
      this.simulation();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CapacityToPayComponent, {
      width: '250px',
      data: {idCredit: this.idCredit},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      //this.credit.payedAmount = result;
    });
  }

  onSale(){
    
    this.service.updateCreditStatus(this.credit,1,"ForSale")
    .subscribe(p => {
      console.log(p);     
    })
  }

}
