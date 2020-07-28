import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private router: Router) { }
    private role = new BehaviorSubject(null);
    public user_role = this.role.asObservable();

    auth_guard_navigation_handler() {
        if (this.role.value != null) {
            if (this.role.value == 'user') this.router.navigate['candidate'];
            else if (this.role.value == 'admin') this.router.navigate['manager'];
        } else this.router.navigateByUrl('/');
    }


    handleLogin(userName: string, password: string): string {
        if (!userName || !password) return null;
        if (userName === 'user' && password === 'user') {
            this.role.next('user');
            this.router.navigate['candidate'];
            return 'user';
        } else if (userName === 'admin' && password === 'admin') {
            this.role.next('admin');
            this.router.navigate['manager'];
            return 'admin';
        }
        return null;
    }

    logout() {
        this.role.next(null);
        this.auth_guard_navigation_handler();
    }

}
