import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Makerequest } from '../../../../makerequest';
import { Orders } from '../../../orders';
import { Session } from 'selenium-webdriver';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _router:Router,private mkrqt:Makerequest) { }
  msgstatus:boolean;
  totalprice:number;
  totalitems:number;
  receipt:boolean;
  status:boolean;
  msg:string;
  items=[];
  y=[];

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

  remove(ino,quan)
  {
    let a=[];
    let b=[];
    let c=0;
    a=JSON.parse(sessionStorage.getItem('cart'));
    sessionStorage.removeItem('cart');
    let i=a.length;
    while(i != 0)
    {
          i--;
          if(a[i].itemno==ino && a[i].quantity==quan && c==0)
          {
            a.pop()
            c++;
          }
          else
          {
            b.push(a.pop());
          }
    }
    sessionStorage.setItem('cart',JSON.stringify(b));
    location.reload();
  }

  buy()
  {
      let a=JSON.parse(sessionStorage.getItem('cart'));
      let i=0;
      let itemname='';
      while(i<a.length)
      {
        if(i==0)
        itemname=a[i].itemname+'-'+a[i].quantity;
        else
        itemname=itemname+','+a[i].itemname+'-'+a[i].quantity;
        i++;
      }
      
      let orderobj=new Orders();
      orderobj.itemnames=itemname;
      orderobj.orderprice=this.totalprice;
      orderobj.empid=JSON.parse(sessionStorage.getItem('eid'));
      this.mkrqt.order(orderobj).subscribe((data)=>{
        if(data==0)
        {
          this.msg='you dont have enough funds to make this order.';
          this.status=true;
        }
        else
        {
          this.msg='your order has been placed successfully and order id is='+data;
          this.status=true;
        }
      });
      
      sessionStorage.removeItem('cart');
      sessionStorage.setItem('cart',JSON.stringify(this.y));
  }

  ngOnInit() {
    if(sessionStorage.getItem('eid')==null)
    {
      this._router.navigate(['/employee']);
    }

    let a=sessionStorage.getItem('cart');
    this.items=JSON.parse(a);
    this.totalitems=this.items.length;
    if(this.items.length==0)
    {
      this.msgstatus=true;
      this.receipt=false;
    }
    else{
      this.receipt=true;
      this.totalprice=0;
      for(let i=0;i<this.items.length;i++)
      {
        this.totalprice=this.totalprice+this.items[i].price;
      }
    }
  }

}
