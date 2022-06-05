import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro-credit',
  templateUrl: './micro-credit.component.html',
  styleUrls: ['./micro-credit.component.css']
})
export class MicroCreditComponent implements OnInit {
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

  showLoans(){
    this.opened = !this.opened;
    
  }
}
