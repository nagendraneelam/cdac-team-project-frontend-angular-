import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeTable } from '../../../employee-table';
import { Makerequest } from '../../../../makerequest';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

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
  unblock(id)
  {
    let empobj=new EmployeeTable();
    empobj.empid=id
    this.mkrqt.unblock(empobj).subscribe((data)=>{
      if(data==1)
      {
        location.reload();
      }
      else{alert("user not unblocked");}
    });
  }
  remove(id)
  {
    let empobj=new EmployeeTable();
    empobj.empid=id
    this.mkrqt.removeuser(empobj).subscribe((data)=>{
      if(data==1)
      {
        location.reload();
      }
      else{alert("user not removed from list");}
    });
  }
  ngOnInit() {
    if(sessionStorage.getItem("aid")==null)
    {
      this._router.navigate(["/admin"]);
    }
    this.mkrqt.getblockuser().subscribe((data)=>{
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
