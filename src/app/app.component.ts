import { Component, OnInit, Input, EventEmitter, Output, SimpleChange } from '@angular/core';
import {Router} from '@angular/router';
import {OdooRPCService} from '/home/amadou/angular/angular-odoo/angular7-odoo-jsonrpc' ;
import { MatDialog } from '@angular/material';
import { LoginComponent } from './components/login/login/login.component';
import {RightnavComponent} from './components/navigation/rightnav/rightnav.component';
import {LeftnavComponent} from './components/navigation/leftnav/leftnav.component';
import { UserService } from './_services/user.service';
import { VirtualTimeScheduler } from 'rxjs';
import {title} from "./app-data";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit {
  title = title;
  @Input() isAuthenticated :boolean;

  auth :boolean ;

  
 

  

  constructor( private odooRPC: OdooRPCService, private usr:UserService){
    
    
    
  }
   
   

  ngOnInit(){
    // this.usr.tryout().then(res=>{
    //   console.log("tryout, ", res);
    // })
    // this.usr.sesionInf().then(res=>{
    //   console.log("sess, ", res);
    // })
    // console.log(this.usr.loginState);
    // this.usr.isLoggedIn();
    // console.log(this.usr.loginState);
    // console.log(localStorage.getItem('user'));
    // console.log(this.usr.contex());
    
    // this.isAuthenticated = this.usr.loginState;
    // if(this.isAuthenticated){
    //   this.router.navigate(['home']);
    // }
    
    // this.isAuthenticated
    // if (this.isAuthenticated){
    //   this.router.navigate(["home"]);
    // }

    // this.odooRPC.init({
    //   odoo_server: 'http://localhost:8069',
    //   http_auth: 'odoo:odoo' // optional
    // });
    // this.odooRPC.login('test_db', 'amadba92@gmail.com', 'odoo')
    // .then(res => {
    //   console.log('login success');
    //   console.log(res.name);
    //   this.router.navigate(["home"]);
    //   // this.odooRPC.updateContext('openacademy.session')
    //   res = this.odooRPC.searchRead('res.partner',[], [], 0 , 0)
    //           .then(res =>{
    //             // for (let i of res.records){
    //               console.log(res);
    //             // }
    //           });
     

    // }).catch( err => {
    //   console.error('login failed', err.title);
    // });
    


  }
  
  

  onLoggedOut(success:boolean){
    // this.isAuthenticated = success ?  false: true ;  
  }

  

  
}

