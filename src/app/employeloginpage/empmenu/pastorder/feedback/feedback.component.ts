import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private _router:Router) { }
  rn:number;
  msgstatus:boolean;
  msg:string;
  plus()
  {
    if(this.rn != 5)
    this.rn++
  }
  minus()
  {
    if(this.rn!=0)
    this.rn--;
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
  submit()
  {
    this.msgstatus=true;
    this.msg='your feedback have been registered sucessfully';
  }
  ngOnInit() {
      if(sessionStorage.getItem('eid')==null)
      {
        this._router.navigate(['/employee']);
      }
      this.rn=3;
  }

}
