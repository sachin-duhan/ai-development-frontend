import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
    selector: 'app-candidate',
    templateUrl: './candidate.component.html',
    styleUrls: ['./candidate.component.css']
})

export class CandidateComponent implements OnInit {
    constructor(private router: Router) { }
    selected_resume: File = undefined;
    show_preview: boolean = false;
    hide: boolean = false;
    error_msg: Array<string> = [];
    job_recommendation: Array<Job> = []

    ngOnInit() {
    }

    onFileSelected($event) {
        this.error_msg = [];
        let $img: any = document.querySelector('#file');
        if (typeof (FileReader) !== 'undefined') {
            let reader = new FileReader();
            reader.onload = (e: any) => this.selected_resume = e.target.result;
            reader.readAsArrayBuffer($img.files[0]);
        }
        let file = $event.target.files[0].type;
        if (file.indexOf("pdf") == -1) {
            this.show_preview = false;
            this.selected_resume = undefined;
            this.error_msg.push("Resume can only be a pdf file!");
        } else this.show_preview = true;
    }

    navigateTo(id: string) {
        this.router.navigate(['/interview', id]);
    }

    upload_resume(): void {
        this.error_msg = [];
        if (!this.selected_resume) { this.error_msg.push("Kindly select a Resume."); return; }
        this.job_recommendation = [
            { title: "Data Scientist", _id: "1", description: "requirement for a Data Scientist", image: "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1551437392/img/co_img_338_1501838305.png", },
            { title: "Data Scientist", _id: "2", description: "requirement for a Data Scientist", image: "https://5.imimg.com/data5/DL/VM/MY-26200765/data-science-training-500x500.png", },
            { title: "Machine Learing Engineer", _id: "3", description: "requirement for a Data Scientist", image: "https://online.stanford.edu/sites/default/files/styles/figure_default/public/2018-03/reinforcement-learning_cs234-original.jpg?itok=NDm4Wy0q", },
        ]
    }
}

interface Job { title: string, description: string, image: string, _id: string }