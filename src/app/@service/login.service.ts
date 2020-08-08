import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const token_name = 'bitgrit_login_token';
@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private router: Router) { }
    private role = new BehaviorSubject(null);
    public user_role = this.role.asObservable();

    public isLoggedIn():string {
        if (localStorage.getItem(token_name))
            return localStorage.getItem(token_name);
        return null;
    }

    private get_token_from_storage(): string {
        if (localStorage.getItem(token_name))
            return localStorage.getItem(token_name);
        return null;
    }

    private set_token(token: string) { localStorage.setItem(token_name, token); }

    auth_guard_navigation_handler() {
        if (this.role.value != null || localStorage.getItem(token_name)) {
            if (this.role.value == 'user' || this.get_token_from_storage() == 'user')
                this.router.navigate['candidate'];
            else if (this.role.value == 'admin' || this.get_token_from_storage() == 'admin')
                this.router.navigate['manager'];
        } else this.router.navigateByUrl('/');
    }

    handleLogin(userName: string, password: string): string {
        if (!userName || !password) return null;
        if (userName === 'user' && password === 'user') {
            this.role.next('user');
            this.set_token('user');
            this.router.navigate['candidate'];
            return 'user';
        } else if (userName === 'admin' && password === 'admin') {
            this.role.next('admin');
            this.set_token('admin');
            this.router.navigate['manager'];
            return 'admin';
        }
        return null;
    }

    logout() {
        this.role.next(null);
        localStorage.removeItem(token_name);
        this.auth_guard_navigation_handler();
    }

}
