import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  getAllAdBookings(): Observable<any> {
    const companyId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/company/bookings/${companyId}`, {
        headers: this.createAuthorizationHeader()
    });
}
  constructor() { }
}


//ad these fuction to file