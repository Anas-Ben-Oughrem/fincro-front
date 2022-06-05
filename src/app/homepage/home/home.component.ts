import { AppSidebarComponent } from './../../layouts/full/sidebar/sidebar.component';
import { User } from './../interfaces/user';
import { FullComponent } from './../../layouts/full/full.component';
import { SpinnerComponent } from './../../shared/spinner.component';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {NgForm} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./assets/css/fontawesome.css','./assets/css/templatemo-finance-business.css','./assets/css/owl.css','./vendor/bootstrap/css/bootstrap.min.css',
'./assets/css/flex-slider.css','./vendor/bootstrap/css/bootstrap.css','./assets/css/main.css','./assets/css/util.css']
})
export class HomeComponent implements OnInit {
 

  state=0;

  closeResult = '';
  script1!: HTMLScriptElement;
  script2!: HTMLScriptElement;
  script3!: HTMLScriptElement;
  script4!: HTMLScriptElement;
  script5!: HTMLScriptElement;
  script6!: HTMLScriptElement;
  script7!: HTMLScriptElement;
  script8!: HTMLScriptElement;
  script9!: HTMLScriptElement;

  formVerif:boolean=false;
  regVerif:boolean=false;
  authVerif:boolean=false;
  reg:User={
    userId: undefined,
    firstName: undefined,
    lastName: undefined,
    profession: undefined,
    gender: undefined,
    phoneNumber: undefined,
    username: undefined,
    password: undefined,
    email: undefined,
    salary: 0,
    cin: 0
  };


  constructor(private modalService: NgbModal, private fullComponent: FullComponent, private authService : AuthService) {
  
    
   }
  
   onSubmit(myForm: NgForm) {
  
    this.formVerif=!myForm.valid;
    this.authenticate(myForm.controls['email'].value,myForm.controls['pass'].value);
    console.log(myForm.controls['email'].value);
    console.log(myForm.valid);
      
  }
  onSubmitsu(form:NgForm){
    this.regVerif=!form.valid;
    console.log(form.valid);
    this.reg.firstName=form.controls['fname'].value;
    this.reg.lastName=form.controls['lname'].value;
    this.reg.email=form.controls['mail'].value;
    this.reg.cin=form.controls['cin'].value;
    this.reg.phoneNumber=form.controls['pnumber'].value;
    this.reg.profession=form.controls['profession'].value;
    this.reg.gender=form.controls['gender'].value;
    this.reg.salary=form.controls['salary'].value;
    console.log(this.reg);
    console.log(this.regVerif);
    if(form.valid){
    this.authService.register(this.reg).subscribe(response => {
      alert("You have been regestred successfully! check your email to get your password");
      console.log(response);
    },err => {alert("A problem has accured please check the provided data");
  console.log(err);});
  }

  }
  resetForm(form:NgForm){
    form.resetForm();
  }

   authenticate(username:String,password:String){

    localStorage.removeItem('token');
     
    this.authService.login({"username":username,"password":password})
    .subscribe(response => {
      console.log("in response !");
      console.log(localStorage.getItem('token'));
      localStorage.setItem('token',response.token);
      console.log("after set");
      console.log(localStorage.getItem('token'));
      console.log("after login");
      this.fullComponent.authenticated=!!localStorage.getItem('token');

      this.authService.loadUser(username);

    },err => {console.log(err);
      this.authVerif=true;
      alert("Please verify your login informations");
     });
     
    /*{
     console.log("after login");
     console.log(this.fullComponent.authenticated);}
     
     .subscribe(response => {
       console.log(response.token);
      localStorage.setItem('token',response.token);
    },err => { console.log(err)});
    
     console.log("heyy  "+!!localStorage.getItem('token'))
     if (!!localStorage.getItem('token')){
      this.fullComponent.authenticated=true;

     }*/
   // this.fullComponent.authenticated=true;
    
   }
   stateOne(){
     this.formVerif=false;
     this.authVerif=false;
     this.state=1;
   }
   stateZero(){
     this.authService.loadUser("Ahmed");
     this.state=0;
   }
   stateTwo(){
     this.regVerif=false;
     this.state=2;
   }


  ngOnInit(): void {

    

    this.script1 = document.createElement("script");
    this.script2 = document.createElement("script");
    this.script3 = document.createElement("script");
    this.script4 = document.createElement("script");
    this.script5 = document.createElement("script");
    this.script6 = document.createElement("script");
    this.script7 = document.createElement("script");
    this.script8 = document.createElement("script");
    this.script9 = document.createElement("script");
    
    this.script2.src="../../assets/js/custom.js";
    this.script1.src="../../assets/js/accordions.js";
    this.script3.src="../../assets/js/jquery.singlePageNav.min.js";
    this.script4.src="../../assets/js/owl.js";
    this.script5.src="../../assets/js/slick.js";
    this.script6.src="../../assets/vendor/jquery/jquery.min.js";
    this.script7.src="../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
    this.script8.src="../../assets/js/script8.js";
    this.script9.src= "../../assets/js/script9.js";

    this.script1.type='text/javascript';
    this.script2.type='text/javascript';
    this.script3.type='text/javascript';
    this.script4.type='text/javascript';
    this.script5.type='text/javascript';
    this.script6.type='text/javascript';
    this.script7.type='text/javascript';
    this.script8.type='text/javascript';
    this.script9.type='text/javascript';

    document.getElementsByTagName('head')[0].appendChild(this.script1);
    document.getElementsByTagName('head')[0].appendChild(this.script2);
    document.getElementsByTagName('head')[0].appendChild(this.script3);
    document.getElementsByTagName('head')[0].appendChild(this.script4);
    document.getElementsByTagName('head')[0].appendChild(this.script5);
    document.getElementsByTagName('head')[0].appendChild(this.script6);
    document.getElementsByTagName('head')[0].appendChild(this.script7);
    document.getElementsByTagName('head')[0].appendChild(this.script8);
    document.getElementsByTagName('head')[0].appendChild(this.script9);
  
  }

}
