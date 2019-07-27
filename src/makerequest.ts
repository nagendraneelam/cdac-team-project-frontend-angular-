import { EmployeeTable } from "./app/employee-table";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { URL } from "url";
import { Admin } from "./admin";
import { Items } from "./app/items";
import { Orders } from "./app/orders";
@Injectable({
    providedIn: 'root'
  })
export class Makerequest {
    constructor(private http:HttpClient)
    {}
    emplogin(empobj:EmployeeTable):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/elogin",empobj);
    }
    empregister(empobj:EmployeeTable):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/eregister",empobj);
    }
    userbalance(empobj:EmployeeTable):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/checkbalance",empobj);
    }



    adminlogin(adminobj:Admin):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/alogin",adminobj);
    }
    addmoney(empobj:EmployeeTable):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/addmoney",empobj);
    }
    notapprovedusers():Observable<EmployeeTable[]>
    {
        return this.http.post<EmployeeTable[]>("http://localhost:8080/notapprovedusers",new EmployeeTable());
    }
    approveuser(empobj:EmployeeTable):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/approveuser",empobj);
    }
    blockuser(empobj:EmployeeTable):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/blockuser",empobj);
    }
    getblockuser():Observable<EmployeeTable[]>
    {
        return this.http.post<EmployeeTable[]>("http://localhost:8080/getallblockedusers",new EmployeeTable());
    }
    unblock(empobj:EmployeeTable):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/unblockuser",empobj);
    }
    removeuser(empobj:EmployeeTable):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/removeuser",empobj);
    }

    inactiveItems():Observable<Items[]>
    {
        return this.http.post<Items[]>("http://localhost:8080/getallinactiveitems",new Items());
    }
    addtomenu(itemobj):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/addtomenu",itemobj);
    }
    activeItems():Observable<Items[]>
    {
        return this.http.post<Items[]>("http://localhost:8080/getallactiveitems",new Items);
    }
    removefrommenu(itemobj:Items):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/removefrommenu",itemobj);
    }
    updateitem(url:string,itemobj:Items):Observable<number>
    {
        return this.http.post<number>(url,itemobj);
    }
    ongoingOrders():Observable<Orders[]>
    {
        return this.http.post<Orders[]>("http://localhost:8080/ongoingorders",new Orders());
    }
    completeorder(orderobj:Orders):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/completeorder",orderobj);
    }
    cancelorder(orderobj:Orders):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/cancelorder",orderobj);
    }
    getanitem(itemobj:Items):Observable<Items>
    {
        return this.http.post<Items>("http://localhost:8080/getanitem",itemobj);
    }
    order(orderobj:Orders):Observable<number>
    {
        return this.http.post<number>("http://localhost:8080/order",orderobj);
    }
    userpastorder(empobj:EmployeeTable):Observable<Orders[]>
    {
        return this.http.post<Orders[]>("http://localhost:8080/userpreviousorders",empobj);
    }
    userongoingorder(empobj:EmployeeTable):Observable<Orders[]>
    {
        return this.http.post<Orders[]>("http://localhost:8080/userongoingorders",empobj);
    }
}
