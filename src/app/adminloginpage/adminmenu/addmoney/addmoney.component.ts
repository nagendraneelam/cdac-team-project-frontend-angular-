import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Makerequest } from '../../../../makerequest';
import { EmployeeTable } from '../../../employee-table';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.css']
})
export class AddmoneyComponent implements OnInit {

  constructor(private _router:Router,private mkrqt:Makerequest) { }
  money:number;
  uid:number;
  status:boolean;
  msg:string;

  submit()
  {
    var empobj=new EmployeeTable();
    empobj.empid=this.uid;
    empobj.money=this.money;
    this.mkrqt.addmoney(empobj).subscribe((data)=>{
        if(data==1)
        {
          this.msg='money added successfully';
        }
        else
        {
          this.msg='user id is incorrect';
        }
        this.status=true;
    });
  }
  home()
  {
    this._router.navigate(['/']);
  }
  menu()
  {
    this._router.navigate(['/adminmenu']);
  }
  logout()
  {
    sessionStorage.clear();
    this._router.navigate(['/admin']);
  }
  ngOnInit() {
    if(sessionStorage.getItem('aid')==null)
    {
      this._router.navigate(['/admin']);
    }
  }

}
