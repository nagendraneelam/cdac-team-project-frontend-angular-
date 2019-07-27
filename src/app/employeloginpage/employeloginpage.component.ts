import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeTable } from '../employee-table';
import { Makerequest } from '../../makerequest';

@Component({
  selector: 'app-employeloginpage',
  templateUrl: './employeloginpage.component.html',
  styleUrls: ['./employeloginpage.component.css']
})
export class EmployeloginpageComponent implements OnInit {

  constructor(private _router:Router,private mkrequest:Makerequest) { }

  ngOnInit() {
    if(sessionStorage.getItem('eid') != null)
    {
      this._router.navigate(['/empmenu']);
    }
  }
   ename:number;
   pwd:string;
   showmsg:boolean;
   msg:string;
   items=[];
  login()
  {
    /*if(this.ename==1234 && this.pwd=='4321')
    {
          sessionStorage.setItem('eid',JSON.stringify(this.ename));
          sessionStorage.setItem('cart',JSON.stringify(this.items));
         this._router.navigate(['/empmenu']);
    }
    else{ this.msg='username or password is incorrect ';  this.showmsg=true; }*/
    let emp = new EmployeeTable();
    emp.empid=this.ename;
    emp.pwd=this.pwd;

    this.mkrequest.emplogin(emp).subscribe((data)=>{
      if(data==1)
      {
        sessionStorage.setItem('eid',JSON.stringify(this.ename));
        sessionStorage.setItem('cart',JSON.stringify(this.items));
        this._router.navigate(['/empmenu']);
      }
      else if(data == 0)
      {
        this.msg='username or password is incorrect ';  this.showmsg=true;
      }
      else if(data == 2)
      {
        this.msg=' you have registered successfully wait for admin to approve you ';  this.showmsg=true;
      }
      else if(data ==3)
      {
        this.msg='you are bocked by admin contact admin to resolve this ';  this.showmsg=true;
      }
    });
  }
  reset()
  {
    this.ename=0;
    this.pwd='';
  }
  home()
  {
    this._router.navigate(['/']);
  }
}
