import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/@service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(private _loginService: LoginService) { }
    userName: string = ''; // login credentials
    password: string = ''; // login credentials
    error_msg: string[] = [];

    ngOnInit() { this._loginService.auth_guard_navigation_handler(); }

    login(): void {
        this.error_msg = [];
        if (!this.password || !this.userName) {
            this.error_msg.push('User name is required');
            this.error_msg.push('password is required');
            return;
        }
        const role = this._loginService.handleLogin(this.userName, this.password);
        if (!role) this.error_msg.push('Invalid Login credentials');
        else this._loginService.auth_guard_navigation_handler();
        window.location.reload();
    }

    clear_error_msg(index: number) { this.error_msg.splice(index, 1); }
}
