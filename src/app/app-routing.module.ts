import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { EmployeloginpageComponent } from './employeloginpage/employeloginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { EmpmenuComponent } from './employeloginpage/empmenu/empmenu.component';
import { OrderComponent } from './employeloginpage/empmenu/order/order.component';
import { BuyComponent } from './employeloginpage/empmenu/order/buy/buy.component';
import { PastorderComponent } from './employeloginpage/empmenu/pastorder/pastorder.component';
import { FeedbackComponent } from './employeloginpage/empmenu/pastorder/feedback/feedback.component';
import { CartComponent } from './employeloginpage/empmenu/cart/cart.component';
import { AddmoneyComponent } from './adminloginpage/adminmenu/addmoney/addmoney.component';
import { ApproveuserComponent } from './adminloginpage/adminmenu/approveuser/approveuser.component';
import { FeedbacksComponent } from './adminloginpage/adminmenu/feedbacks/feedbacks.component';
import { ManagemenuComponent } from './adminloginpage/adminmenu/managemenu/managemenu.component';
import { OngoingordersComponent } from './adminloginpage/adminmenu/ongoingorders/ongoingorders.component';
import{ AdditemComponent } from './adminloginpage/adminmenu/managemenu/additem/additem.component';
import{ RemoveitemComponent } from './adminloginpage/adminmenu/managemenu/removeitem/removeitem.component';
import{ ManageitemsComponent } from './adminloginpage/adminmenu/managemenu/manageitems/manageitems.component';

import { AdminmenuComponent } from './adminloginpage/adminmenu/adminmenu.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'admin',
    component:AdminloginpageComponent
  },
  {
    path:'employee',
    component:EmployeloginpageComponent
  },
  {
    path:'register',
    component:RegisterpageComponent
  },
  {
    path:'empmenu',
    component:EmpmenuComponent
  },
  {
    path:'order',
    component:OrderComponent
  },
  {
    path:'buy/:ino',
    component:BuyComponent
  },
  {
    path:'pastorder',
    component:PastorderComponent
  },
  {
    path:'feedback/:oid',
    component:FeedbackComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'adminmenu',
    component:AdminmenuComponent
  },
  {
    path:'addmoney',
    component:AddmoneyComponent
  },
  {
    path:'approveuser',
    component:ApproveuserComponent
  },
  {
    path:'feedbacks',
    component:FeedbacksComponent
  },
  {
    path:'managemenu',
    component:ManagemenuComponent
  },
  {
    path:'ongoing',
    component:OngoingordersComponent
  },
  {
    path:'additem',
    component:AdditemComponent
  },
  {
    path:'removeitem',
    component:RemoveitemComponent
  },
  {
    path:'manageitem',
    component:ManageitemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
