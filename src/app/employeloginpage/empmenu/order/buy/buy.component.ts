import { Component, OnInit } from '@angular/core';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
import { ActivatedRoute, Router } from '@angular/router';
import { Items } from 'src/app/Items';
import { Cartitem } from 'src/app/cartitem';
import { Makerequest } from '../../../../../makerequest';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private _activatedroute:ActivatedRoute,private _router:Router,private mkrqt:Makerequest) { }
  ino:string;
  itemno:number;
  itemname:string;
  quan:number;
  price:number;
  item1:Items;
  itemprice:number;
  status:boolean;
  msg:string;
  minus()
  {
    if(this.quan != 1)
    {
      this.quan--;
      this.price=this.price-this.itemprice;
    }
  }
  plus()
  {
    this.quan++;
    this.price=this.price+this.itemprice;
  }
  logout()
  {
    sessionStorage.clear();
    this._router.navigate(['/employee']);
  }
  menu()
  {
    this._router.navigate(['/order']);
  }
  cart()
    {
      this._router.navigate(['/cart']);
    }
  empmenu()
  {
    this._router.navigate(['/empmenu']);
  }
  home()
  {
    this._router.navigate(['/']);
  }
  final()
  {
    let cartitem=new Cartitem();
    cartitem.itemno=this.itemno;
    cartitem.itemname=this.itemname;
    cartitem.price=this.price;
    cartitem.quantity=this.quan;
    let a=[];
    a=JSON.parse(sessionStorage.getItem('cart'));
    sessionStorage.removeItem('cart');
    a.push(cartitem);
    sessionStorage.setItem('cart',JSON.stringify(a));
    console.log(a);
    this.status=true;
  }
  
  ngOnInit() {
    if(sessionStorage.getItem('eid') == null)
    {
      this._router.navigate(['employee']);
    }
    
    this.item1=new Items();
    this._activatedroute.paramMap.subscribe( params => { this.ino=params.get('ino'); }  );
    let itemobj=new Items();
    itemobj.itemno=JSON.parse(this.ino);
    this.mkrqt.getanitem(itemobj).subscribe((data)=>{
      this.item1=data;
      this.price=this.item1.price;
      this.itemname=this.item1.itemname;
      this.itemno=this.item1.itemno;
      this.itemprice=this.price;
      this.quan=1;
    });
    
  }

}
