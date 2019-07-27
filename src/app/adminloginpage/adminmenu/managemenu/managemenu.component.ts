import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managemenu',
  templateUrl: './managemenu.component.html',
  styleUrls: ['./managemenu.component.css']
})
export class ManagemenuComponent implements OnInit {

  constructor(private _router:Router) { }

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
  ngOnInit() {
    if(sessionStorage.getItem('aid')==null)
    {
      this._router.navigate(['admin']);
    }
  }

}
