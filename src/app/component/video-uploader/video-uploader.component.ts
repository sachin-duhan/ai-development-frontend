import { DataService } from '../../@service/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/@types/type';

@Component({
    selector: 'select-video-and-upload',
    templateUrl: './video-uploader.component.html'
})
export class VideoUploaderComponent implements OnInit {

    @Input() question: Observable<Question>;
    @Input() username: string = 'No username';
    constructor(
        private _backend: DataService,
    ) { }


    public loading: boolean = false;
    public myQuestion: Question;

    public selected_video: any = undefined;
    public title: string = "Kindly select the recorded video";

    is_video_submitted: boolean = false;
    private file_and_titleHandler(file: File, title: string) {
        this.selected_video = file;
        this.title = title;
    }

    ngOnInit() {
        this.question.subscribe(question => {
            this.myQuestion = question;
            this.file_and_titleHandler(null, "Kindly select the recorded video");
        });
    }

    async onFileSelected($event) {
        this.is_video_submitted = false;
        let $video: any = document.querySelector('#file');
        if (typeof (FileReader) !== 'undefined') {
            let reader = new FileReader();
            reader.onload = (e: any) => {
                this.file_and_titleHandler(e.target.result, "File selected successfully");
                let _file: File = $event.target.files[0];
                if (_file.name.indexOf("mp4") === -1) {
                    console.log(_file.name.indexOf("mp4"));
                    this.file_and_titleHandler(null, "Video can only be a mp4 file!");
                }
            }
            reader.readAsDataURL($video.files[0]);
        }
    }

    upload_selected_video(): void {
        if (!this.video_validation()) return;
        let formData = new FormData();
        formData.append("file", this.selected_video);
        formData.append("username", this.username);
        formData.append("question_no", '1');
        this.loading = true;
        this._backend.upload_video(formData).subscribe(
            res => {
                alert('success'); console.log(res);
                this.loading = false; this.is_video_submitted = true;
            }, err => {
                console.log(err);
                this.loading = false;
                window.alert(err.message);
                window.location.reload();
            }
        );
    }

    private video_validation(): boolean {
        this.username.trim();
        if (!this.selected_video) {
            this.file_and_titleHandler(undefined, "Kinldy selected a Video!");
            return false;
        } else if (this.username == 'your Name?' || !this.username) {
            window.alert('Invalid Username. Kindly enter your name');
            return false;
        } else if (this.selected_video.indexOf("mp4") === -1) {
            window.alert('Kindly select a mp4 video only');
            window.location.reload();
            return false;
        }
        return true;
    }
}