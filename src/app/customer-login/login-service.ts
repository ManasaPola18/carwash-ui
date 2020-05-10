import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class LoginService {

    private userTypeSource = new Subject<string>();
    private userIdSource = new Subject<string>();

    // Observable string streams
    userId = this.userIdSource.asObservable();
    userType = this.userTypeSource.asObservable();

    setUserDetails(userId:string, userType:string) {
        this.userTypeSource.next(userType);
        this.userIdSource.next(userId);
    }

}