import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../@service/data.service';
import * as _dummy from '../@data/main';

@Component({
    selector: 'app-candidate',
    templateUrl: './candidate.component.html',
    styleUrls: ['./candidate.component.css']
})

export class CandidateComponent implements OnInit {

    constructor(
        private router: Router,
        private _backend: DataService
    ) { }
    loading: boolean = false;
    selected_resume: File = undefined;
    show_preview: boolean = false;
    hide: boolean = false;
    error_msg: Array<string> = [];
    job_recommendation: Array<Job> = []

    resume_response;
    ngOnInit() {
    }

    onFileSelected($event) {
        this.error_msg = [];
        let $img: any = document.querySelector('#file');
        if (typeof (FileReader) !== 'undefined') {
            let reader = new FileReader();
            reader.onload = (e: any) => this.selected_resume = e.target.result;
            reader.readAsDataURL($img.files[0]);
        } else { this.error_msg.push("Internal Server Erorr!"); return; }

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
        let formData = new FormData();
        formData.append("enc", this.selected_resume);
        this.loading = true;
        this._backend.upload_resume(formData).subscribe(
            res => { console.log(res); this.resume_response = _dummy.resume_response; this.loading = false; },
            err => { console.log(err); this.error_msg.push(err.message); this.loading = false; }
        );
        this.job_recommendation = [
            { title: "Data Scientist", _id: "1", description: "requirement for a Data Scientist", image: "https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1551437392/img/co_img_338_1501838305.png", },
            { title: "Data Scientist", _id: "2", description: "requirement for a Data Scientist", image: "https://5.imimg.com/data5/DL/VM/MY-26200765/data-science-training-500x500.png", },
            { title: "Machine Learing Engineer", _id: "3", description: "requirement for a Data Scientist", image: "https://online.stanford.edu/sites/default/files/styles/figure_default/public/2018-03/reinforcement-learning_cs234-original.jpg?itok=NDm4Wy0q", },
        ]
    }
}

interface Job { title: string, description: string, image: string, _id: string }