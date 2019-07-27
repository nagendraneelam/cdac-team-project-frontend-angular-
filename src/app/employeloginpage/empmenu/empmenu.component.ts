import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from 'src/app/Items';
import { Makerequest } from '../../../makerequest';
import { EmployeeTable } from '../../employee-table';

@Component({
  selector: 'app-empmenu',
  templateUrl: './empmenu.component.html',
  styleUrls: ['./empmenu.component.css']
})
export class EmpmenuComponent implements OnInit {

  constructor(private _router:Router,private mkrqt:Makerequest) { }
  logout()
  {
    sessionStorage.clear();
    this._router.navigate(['/employee']);
  }
  msg:string;
  status:boolean;
  balance()
  {
      var empobj=new EmployeeTable();
      empobj.empid=JSON.parse(sessionStorage.getItem("eid"));
      this.mkrqt.userbalance(empobj).subscribe((data)=>{
        this.msg='you have RS.'+data+'/- in your wallet';
        this.status=true;
      });
  }
  home()
  {
    this._router.navigate(['/'])
  }
  ngOnInit() {
    
      if(sessionStorage.getItem('eid') == null)
      {
        this._router.navigate(['employee']);
      }
}
}
