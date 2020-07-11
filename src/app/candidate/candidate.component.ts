import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-candidate',
    templateUrl: './candidate.component.html',
    styleUrls: ['./candidate.component.css']
})

export class CandidateComponent implements OnInit {
    constructor() { }
    selected_resume: File = undefined;
    show_preview: boolean = false;
    error_msg: Array<string> = [];
    ngOnInit() { }

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

    upload_resume(): void {
        this.error_msg = [];
        if (!this.selected_resume) { this.error_msg.push("Kindly select a Resume."); return; }
        // write a service for upload resume and fetching data back!
        window.alert("backend integeration required!");
    }
}
