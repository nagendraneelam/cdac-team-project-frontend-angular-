import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../../../orders';
import { Makerequest } from '../../../../makerequest';
import { identity } from 'rxjs';

@Component({
  selector: 'app-ongoingorders',
  templateUrl: './ongoingorders.component.html',
  styleUrls: ['./ongoingorders.component.css']
})
export class OngoingordersComponent implements OnInit {

  constructor(private _router:Router,private mkrqt:Makerequest) { }
  list=[];
  tabstatus:boolean;
  msgstatus:boolean;
  showmsg:boolean;
  completed(id)
  {
    let orderobj=new Orders();
    orderobj.orderid=id;
    this.mkrqt.completeorder(orderobj).subscribe((data)=>{
      if(data==1)
      {
        location.reload();
      }
      else
      alert("order not completed. Try again later");
    });
  }
  cancelled(id)
  {
    let orderobj=new Orders();
    orderobj.orderid=id;
    this.mkrqt.cancelorder(orderobj).subscribe((data)=>{
      if(data==1)
      {
        location.reload();
      }
      else
      alert("order not concelled. Try again later");
    });
  }
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
  ngOnInit() {
    if(sessionStorage.getItem('aid')==null)
    {
        this._router.navigate(['/admin']);
    }

    this.mkrqt.ongoingOrders().subscribe((data)=>{
      this.list=data;
      if(this.list.length==0)
      this.showmsg=true;
      else
      this.showmsg=false;
    });
    /*let order1=new Orders;
    let order2=new Orders;
    let order3=new Orders;
    let order4=new Orders;
    let order5=new Orders;

    order1.orderid='AD321';
    order1.itemnames='Idly-2,poori';
    order1.orderprice=50;
    order1.empid=1234;
    order1.empname='nagendra';

    order2.orderid='AD323';
    order2.itemnames='dosa';
    order2.orderprice=30;
    order2.empid=1235;
    order2.empname='shwetha';

    order3.orderid='AD325';
    order3.itemnames='pongal';
    order3.orderprice=30;
    order3.empid=1237;
    order3.empname='sunanth';

    order4.orderid='DB323';
    order4.itemnames='chapathi';
    order4.orderprice=40;
    order4.empid=420;
    order4.empname='Jyotshna';

    order5.orderid='DB383';
    order5.itemnames='chapathi';
    order5.orderprice=40;
    order5.empid=4200;
    order5.empname='anmi';

    this.list.push(order1);
    this.list.push(order2);
    this.list.push(order3);
    this.list.push(order4);
    this.list.push(order5);*/

    
  }

}
