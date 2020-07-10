import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    year = new Date().getFullYear();
    
    navigation_list: Array<{ title: string, url: string }> = [
        { url: 'candidate', title: 'Candidate' },
        { url: 'evaluate', title: 'Interview' },
        { url: 'manager', title: 'Manager' },
        { url: 'interview', title: 'Interview' },
    ];

    social_media_links:Array<{ url: string; path: string}> =[
        { url: '#!', path: '/assets/social media/facebook.svg' },
        { url: '#!', path: '/assets/social media/twitter.svg'},
        { url: '#!', path: '/assets/social media/instagram.svg'},
        { url: '#!', path: '/assets/social media/youtube.svg' },
    ]
}
