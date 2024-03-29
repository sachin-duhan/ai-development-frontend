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
        private _backend: DataService,
    ) { }

    public loading: boolean = false;
    public selected_resume: File = undefined;
    public show_preview: boolean = false;
    public hide: boolean = false;
    public error_msg: Array<string> = [];
    public job_recommendation: Array<Job> = []

    public resume_response;

    ngOnInit() { }

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
        if (!this.selected_resume) {
            this.error_msg.push("Kindly select a Resume.");
            return;
        }

        let formData = new FormData();
        formData.append("enc", this.selected_resume);

        this.loading = true;
        this._backend.upload_resume(formData).subscribe(
            res => this.upload_resume_callback(res),
            err => {
                console.log(err);
                this.resume_response = _dummy.resume_response;
                this.loading = false;
            }
        );
    }

    upload_resume_callback(res) {
        this.loading = false;
        this.resume_response = res;
    }

}

interface Job { title: string, description: string, image: string, _id: string }