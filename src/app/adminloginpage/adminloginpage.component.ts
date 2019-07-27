import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Makerequest } from '../../makerequest';
import { Admin } from '../../admin';

@Component({
  selector: 'app-adminloginpage',
  templateUrl: './adminloginpage.component.html',
  styleUrls: ['./adminloginpage.component.css']
})
export class AdminloginpageComponent implements OnInit {
   uname:number;
   pwd:string;
   msg:string;
   showmsg:boolean;
  constructor(private _router:Router,private mkrqt:Makerequest) { }
  
  login()
  {
    let adminobj=new Admin();
    adminobj.adminid=this.uname;
    adminobj.pwd=this.pwd;
    this.mkrqt.adminlogin(adminobj).subscribe((data)=>{
      if(data==1)
      {
         this.msg='success';
         this.showmsg=true;
         sessionStorage.setItem('aid',JSON.stringify(this.uname));
         this._router.navigate(['/adminmenu']);
      }
      else
      {
        this.msg='username or password is incorrect ';  this.showmsg=true; 
      }
    });
  }
  reset()
  {
    this.uname=0;
    this.pwd='';
  }
  home()
  {
    this._router.navigate(['/']);
  }
  ngOnInit() {
    if(sessionStorage.getItem('aid') != null)
    {
      this._router.navigate(['/adminmenu']);
    }
  }
}

  
  
