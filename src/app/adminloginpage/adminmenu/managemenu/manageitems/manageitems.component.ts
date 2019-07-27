import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../../../../items';
import { Makerequest } from '../../../../../makerequest';

@Component({
  selector: 'app-manageitems',
  templateUrl: './manageitems.component.html',
  styleUrls: ['./manageitems.component.css']
})
export class ManageitemsComponent implements OnInit {
  

  constructor(private _router:Router,private mkrqt:Makerequest) { }

  operation: number;
  status:boolean;
  ino:number;
  iname:string;
  price:number;
  msg:string;
  msgstatus:boolean;
  url:string;
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
  sub()
  {
    let item=new Items();
    item.itemno=this.ino;
    item.itemname=this.iname;
    item.price=this.price;
    this.mkrqt.updateitem(this.url,item).subscribe((data)=>{
      if(data==1)
      {
         switch(this.operation)
          {
            case 1:
            this.msgstatus=true;
            this.msg="added successfully"
            break;
            case 2:
            this.msgstatus=true;
            this.msg="removed successfully"
            break;
            case 3:
            this.msgstatus=true;
            this.msg="modilfied successfully"
            break;
          }
      }
      else
      {
        switch(this.operation)
        {
          case 1:
          this.msgstatus=true;
          this.msg="Item Id already exists. Enter a new Item Id";
          break;
          case 2:
          this.msgstatus=true;
          this.msg="Item Id not found. Enter existing Item ID";
          break;
          case 3:
          this.msgstatus=true;
          this.msg="Item Id not found. Enter existing Item ID to be modify";
          break;
        }
      }
    });
    /*switch(this.operation)
    {
      case 1:
      this.msgstatus=true;
      this.msg="added successfully"
      break;
      case 2:
      this.msgstatus=true;
      this.msg="removed successfully"
      break;
      case 3:
      this.msgstatus=true;
      this.msg="modilfied successfully"
      break;
    }*/
  }
  update()
  {
    this.status=true;
    this.url="http://localhost:8080/updateitem";
    this.operation=3;
  }
  add()
  {
    this.status=true;
    this.operation=1;
    this.url="http://localhost:8080/addnewitem";
  }
  remove()
  {
    this.status=false;
    this.operation=2;
    this.url="http://localhost:8080/removeitem";
  }
  ngOnInit() {
    if(sessionStorage.getItem('aid')==null)
    {
      this._router.navigate(['admin']);
    }
  }

}
