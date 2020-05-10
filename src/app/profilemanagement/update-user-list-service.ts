import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Customer } from '../signupcomponent/customer';

@Injectable({
    providedIn:'root'
})
export class UpdateUserListService {

    private userListService = new Subject<string>();

    newCustomer = this.userListService.asObservable();

    addUserEmailId(emailId:string) {
        this.userListService.next(emailId);
    }

}
