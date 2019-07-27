import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../../../../items';
import { Makerequest } from '../../../../../makerequest';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

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
  addtolist(id)
  {
      let item=new Items();
      item.itemno=id;
      this.mkrqt.addtomenu(item).subscribe((data)=>{
        if(data==1)
        location.reload();
        else
        alert("item is not added to menu");
      });  
  }
  ngOnInit() {
    if(sessionStorage.getItem('aid')==null)
    {
      this._router.navigate(['admin']);
    }

    this.mkrqt.inactiveItems().subscribe((data)=>{
      this.addlist=data;
      if(this.addlist.length==0)
      {
        this.showmsg=true;
      }
      else{
        this.showmsg=false;
      }
    });
  }

}
