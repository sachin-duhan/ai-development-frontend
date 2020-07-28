import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from './@service/login.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    // used in footer for copyright year display!
    year = new Date().getFullYear();
    constructor(
        private router: Router,
        private _login: LoginService,
    ) { }

    isLoggedIn: boolean = false;
    navigation_list: navbar[] = [];

    ngOnInit() {
        this.navlist_update_handler();
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) return;
            else {
                this._login.auth_guard_navigation_handler();
                window.scrollTo(0, 0)
            }
        });
    }

    logout(): void {
        this._login.logout();
    }

    navlist_update_handler(): void {
        this._login.user_role.subscribe(role => {
            this.navigation_list = [];
            if (!role) {
                // this.navigation_list = [{ title: 'Login', url: '/' }];
                this.router.navigate['/'];
                this.isLoggedIn = false;
            }
            else {
                this.isLoggedIn = true;
                if (role === 'user') {
                    this.navigation_list = [
                        { url: 'candidate', title: 'Candidate' },
                        { url: 'interview/1', title: 'Interview' },
                    ];
                    this.router.navigate(['candidate']);
                    this.isLoggedIn = true;
                } else if (role === 'admin') {
                    this.navigation_list = [
                        { url: 'manager', title: 'Manager' },
                        { url: 'evaluate', title: 'Evaluation' },
                    ];
                    this.router.navigate(['manager']);
                }
            }
        });
    }

    social_media_links: Array<{ url: string; path: string }> = [
        { url: '#!', path: '/assets/social media/facebook.svg' },
        { url: '#!', path: '/assets/social media/youtube.svg' },
        { url: '#!', path: '/assets/social media/twitter.svg' },
        { url: '#!', path: '/assets/social media/instagram.svg' },
    ]
}
interface navbar { title: string, url: string }