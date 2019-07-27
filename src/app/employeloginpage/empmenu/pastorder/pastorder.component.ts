import { Component, OnInit, EmbeddedViewRef } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/orders';
import { Makerequest } from '../../../../makerequest';
import { EmployeeTable } from '../../../employee-table';

@Component({
  selector: 'app-pastorder',
  templateUrl: './pastorder.component.html',
  styleUrls: ['./pastorder.component.css']
})
export class PastorderComponent implements OnInit {

  constructor(private _router:Router,private mkrqt:Makerequest) { }
  
  pastarr=[];
  currentarr=[];
  ongoingmsgstatus:boolean;
  ongoingorderstable:boolean;
  haveprevorders:boolean;
  nothaveorders:boolean

  feedback(oid)
  {
    console.log(oid);
    this._router.navigate(['/feedback/',oid]);
  }
  logout()
  {
    sessionStorage.clear();
    this._router.navigate(['/employee']);
  }

  menu()
  {
    this._router.navigate(['/empmenu']);
  }

  home()
  {
    this._router.navigate(['/']);
  }
  ngOnInit() {
    if(sessionStorage.getItem('eid') == null)
    {
         this._router.navigate(['employee']);
    }

    let empobj=new EmployeeTable();
    empobj.empid=JSON.parse(sessionStorage.getItem('eid'));
    this.mkrqt.userpastorder(empobj).subscribe((data)=>{
      this.pastarr=data;
      if(this.pastarr.length==0)
      {
        this.haveprevorders=false;
        this.nothaveorders=true;
      }
      else
      {
        this.haveprevorders=true;
        this.nothaveorders=false;
      }
    });

    this.mkrqt.userongoingorder(empobj).subscribe((data)=>{
      this.currentarr=data;
      if(this.currentarr.length==0)
      {
        this.ongoingmsgstatus=true;
        this.ongoingorderstable=false;
      }
      else
      {
        this.ongoingmsgstatus=false;
        this.ongoingorderstable=true;
      }
    });
  }

}
