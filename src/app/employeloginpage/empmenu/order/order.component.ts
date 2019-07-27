import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from 'src/app/Items';
import { Makerequest } from '../../../../makerequest';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  

  constructor(private _router:Router,private mkrqt:Makerequest) { }

  obj=[];
  a:number;
  showmsg: boolean;

  order(ino,iname,price)
  {
    //console.log(ino+' '+iname+' '+price)
    this._router.navigate(['/buy/',ino]);
  }
  logout()
  {
    sessionStorage.clear();
    this._router.navigate(['/employee']);
  }
  home()
  {
    this._router.navigate(['/']);
  }
  menu()
  {
    this._router.navigate(['/empmenu']);
  }
    
  ngOnInit() {
    if(sessionStorage.getItem('eid') == null)
      {
        this._router.navigate(['employee']);
      }
     this.mkrqt.activeItems().subscribe((data)=>{
       this.obj=data;
       if(this.obj.length==0)
       this.showmsg=true;
       else
       this.showmsg=false;
     });
  }

}
