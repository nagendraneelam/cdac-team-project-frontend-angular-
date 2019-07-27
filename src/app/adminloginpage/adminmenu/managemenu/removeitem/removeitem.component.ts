import { Component, OnInit } from '@angular/core';
import { Items } from '../../../../items';
import { Router } from '@angular/router';
import { Makerequest } from '../../../../../makerequest';

@Component({
  selector: 'app-removeitem',
  templateUrl: './removeitem.component.html',
  styleUrls: ['./removeitem.component.css']
})
export class RemoveitemComponent implements OnInit {

  addlist=[];
  showmsg: boolean;
  constructor(private _router:Router,private mkrqt:Makerequest) { }

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
  removefromlist(id)
  {
      let item=new Items();
      item.itemno=id;
      this.mkrqt.removefrommenu(item).subscribe();
      location.reload();
  }
  ngOnInit() {
    if(sessionStorage.getItem('aid')==null)
    {
      this._router.navigate(['admin']);
    }

    this.mkrqt.activeItems().subscribe((data)=>{
      this.addlist=data;
      if(this.addlist.length==0)
      this.showmsg=true;
      else
      this.showmsg=false;
    });
    /*let item1=new Items();
    let item2=new Items();
    let item3=new Items();
    let item4=new Items();
    let item5=new Items();

    item1.itemno=6;
    item1.itemname='mysore bonda';
    item1.price=30;

    item2.itemno=7;
    item2.itemname='chapathi';
    item2.price=30;

    item3.itemno=8;
    item3.itemname='dahi vada';
    item3.price=40;

    item4.itemno=9;
    item4.itemname='gobi manchuria';
    item4.price=90;

    item5.itemno=10;
    item5.itemname='egg rice';
    item5.price=110;
    
    this.addlist.push(item1);
    this.addlist.push(item2);
    this.addlist.push(item3);
    this.addlist.push(item4);
    this.addlist.push(item5);*/
  }


}
