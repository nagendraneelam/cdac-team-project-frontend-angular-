import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmenu',
  templateUrl: './adminmenu.component.html',
  styleUrls: ['./adminmenu.component.css']
})
export class AdminmenuComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('aid')==null)
    {
        this._router.navigate(['/admin']);
    }
  }
  
  logout()
  {
    sessionStorage.clear();
    this._router.navigate(['/admin']);
  }
  home()
  {
    this._router.navigate(['/']);
  }
}
