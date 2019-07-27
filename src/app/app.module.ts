import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AdminmenuComponent } from './adminloginpage/adminmenu/adminmenu.component';
import { ApproveuserComponent } from './adminloginpage/adminmenu/approveuser/approveuser.component';
import { AddmoneyComponent } from './adminloginpage/adminmenu/addmoney/addmoney.component';
import { OngoingordersComponent } from './adminloginpage/adminmenu/ongoingorders/ongoingorders.component';
import { ManagemenuComponent } from './adminloginpage/adminmenu/managemenu/managemenu.component';
import { FeedbacksComponent } from './adminloginpage/adminmenu/feedbacks/feedbacks.component';
import { AdditemComponent } from './adminloginpage/adminmenu/managemenu/additem/additem.component';
import { RemoveitemComponent } from './adminloginpage/adminmenu/managemenu/removeitem/removeitem.component';
import { ManageitemsComponent } from './adminloginpage/adminmenu/managemenu/manageitems/manageitems.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginpageComponent,
    EmployeloginpageComponent,
    RegisterpageComponent,
    EmpmenuComponent,
    OrderComponent,
    BuyComponent,
    PastorderComponent,
    FeedbackComponent,
    CartComponent,
    AdminmenuComponent,
    ApproveuserComponent,
    AddmoneyComponent,
    OngoingordersComponent,
    ManagemenuComponent,
    FeedbacksComponent,
    AdditemComponent,
    RemoveitemComponent,
    ManageitemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
