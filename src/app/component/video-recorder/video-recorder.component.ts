import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../@types/type';
import { DataService } from 'src/app/@service/data.service';

declare var MediaRecorder: any;

@Component({
    selector: 'video-recorder',
    templateUrl: './video-recorder.component.html'
})

export class VideoRecorderComponent implements OnInit {

    constructor(private _backend: DataService) { }
    @Input() job_name: string = "";
    @Input() question: Observable<Question>;
    @Input() username: string = 'No username';
    public myQuestion: Question;

    public video_contraints = { "video": { width: { max: 320 } }, "audio": true };
    public videoStream: MediaStream;
    public videoRecorder;
    public videoRecordedChunks = [];

    public loading: boolean = false;
    public is_video_playing: boolean = false;
    public is_video_submitted: boolean = false;

    ngOnInit() {
        this.question.subscribe(question => { this.myQuestion = question; this.reset() });
    }

    start_recording() {
        if (this.is_video_submitted) return;
        navigator.mediaDevices.getUserMedia(this.video_contraints)
            .then(stream => this.video_recording_callback(stream))
            .catch(e => {
                console.error('getUserMedia() failed: ' + e);
                window.alert('oops! something went wrong.');
            });
    }

    video_recording_callback(stream) {
        this.videoStream = stream;
        var video = document.querySelector('video');
        video.srcObject = stream;
        let video_recorder;
        try {
            video_recorder = new MediaRecorder(stream, { mimeType: "video/webm" });
        } catch (e) {
            console.error('Exception while creating MediaRecorder: ' + e);
            window.alert('oops! something went wrong.');
            return;
        }
        this.videoRecorder = video_recorder;
        video_recorder.ondataavailable = event => { this.videoRecordedChunks.push(event.data); }
        video_recorder.start(100);
        this.is_video_playing = true;
    }

    stop() {
        this.videoRecorder.stop();
        this.videoStream.getTracks().forEach(track => track.stop());
    }

    upload() {
        this.username.trim();
        if (this.username == 'your Name?' || !this.username) {
            window.alert('Invalid Username. Kindly enter your name');
            return;
        }
        this.loading = true;
        if (this.videoRecorder.state == 'recording') this.stop();
        var video = new Blob(this.videoRecordedChunks, { type: "video/mp4" });
        // var video_url = URL.createObjectURL(video);
        let formData = new FormData();
        formData.append("file", video, "video.mp4");
        formData.append("username", this.username);
        formData.append("question_no", '1');
        this._backend.upload_video(formData).subscribe(res => {
            window.alert('video uploaded Successfully');
            this.loading = false;
            this.is_video_submitted = true;
        }, err => {
            console.error(err); this.loading = false;
            window.alert(err.message);
            // window.location.reload();
        });
    }

    private download_local(url, extension) { // not used anywhere!
        var a = window.document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = `video - ${this.job_name}.${extension}`;
        a.click();
        setTimeout(function () { URL.revokeObjectURL(url); }, 100);
    }

    reset() {
        // to reinit the state of the component when new question is subscribed to!
        this.is_video_playing = false;
        this.is_video_submitted = false;
        this.videoRecordedChunks = [];
        this.videoRecorder = undefined;
        this.videoStream = null;
    }
}