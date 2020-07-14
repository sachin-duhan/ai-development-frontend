import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    // used in footer for copyright year display!
    year = new Date().getFullYear();

    constructor(private router: Router) { }
    ngOnInit() {
        // used for navigate to top on route chnage or navigate!
        // primarily for better user experience.
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) return;
            window.scrollTo(0, 0)
        });
    }

    // navbar navigate list
    navigation_list: Array<{ title: string, url: string }> = [
        { url: 'candidate', title: 'Candidate' },
        { url: 'interview/1', title: 'Interview' },
        { url: 'manager', title: 'Manager' },
        { url: 'evaluate', title: 'Evaluation' },
    ];

    // footer social media icon!
    social_media_links: Array<{ url: string; path: string }> = [
        { url: '#!', path: '/assets/social media/facebook.svg' },
        { url: '#!', path: '/assets/social media/youtube.svg' },
        { url: '#!', path: '/assets/social media/twitter.svg' },
        { url: '#!', path: '/assets/social media/instagram.svg' },
    ]
}
