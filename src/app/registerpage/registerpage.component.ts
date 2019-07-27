import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Makerequest } from '../../makerequest';
import { EmployeeTable } from '../employee-table';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  constructor(private _router:Router,private mkrqt:Makerequest) { }

  ngOnInit() {
  }
  ename:string;
  mno:string;
  pwd:string;
  eid:number;
  showmsg:boolean;
  result:string;
  check()
  {
      /* if(this.eid != null && this.ename != null && this.mno != null && this.pwd != null)
       {
           this.result='your details have been registered successfully wait for approval';
       }
       else{
         this.result='fill all the details';
       }
       this.showmsg=true; */
       let emp=new EmployeeTable();
       emp.empid=this.eid;
       emp.empname=this.ename;
       emp.pwd=this.pwd;
       emp.mobile=this.mno;
       this.mkrqt.empregister(emp).subscribe((data)=>{
        if(data==1)
         {
          this.result='you have registered successfully. wait untill admin approve you';
         }
         else if(data==2)
         {
          this.result='this userid already have an account';
         }
         else
         {
          this.result='your details are not registered. Try agian later';
         }
         this.showmsg=true;
       });
  }
  reset()
  {
    this.eid=0;
    this.ename='';
    this.mno='';
    this.pwd='';
  }
}
