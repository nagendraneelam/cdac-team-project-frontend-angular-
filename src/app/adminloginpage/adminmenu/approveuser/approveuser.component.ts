import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeTable } from '../../../employee-table';
import { Makerequest } from '../../../../makerequest';

@Component({
  selector: 'app-approveuser',
  templateUrl: './approveuser.component.html',
  styleUrls: ['./approveuser.component.css']
})
export class ApproveuserComponent implements OnInit {

  constructor(private _router:Router,private mkrqt:Makerequest) { }
  list=[];
  showmsg:boolean;
  menu()
  {
    this._router.navigate(['/adminmenu']);
  }
  home()
  {
    this._router.navigate(['/']);
  }
  logout()
  {
    sessionStorage.clear();
    this._router.navigate(['/admin']);
  }
  approve(id)
  {
    let empobj=new EmployeeTable();
    empobj.empid=id
    this.mkrqt.approveuser(empobj).subscribe((data)=>{
      if(data==1)
      {
        location.reload();
      }
      else{alert("user not approved");}
    });
  }
  Block(id)
  {
    let empobj=new EmployeeTable();
    empobj.empid=id
    this.mkrqt.blockuser(empobj).subscribe((data)=>{
      if(data==1)
      {
        location.reload();
      }
      else{alert("user not blocked");}
    });
  }
  ngOnInit() {
    if(sessionStorage.getItem("aid")==null)
    {
      this._router.navigate(["/admin"]);
    }
    this.mkrqt.notapprovedusers().subscribe((data)=>{
    this.list=data;
    if(this.list.length==0)
    {
      this.showmsg=true;
    }
    else
    {
      this.showmsg=false;
    }
    });
  }

}
