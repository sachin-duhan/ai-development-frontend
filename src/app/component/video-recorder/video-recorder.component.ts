import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../@types/type';

declare var MediaRecorder: any;

@Component({
    selector: 'video-recorder',
    templateUrl: './video-recorder.component.html'
})

export class VideoRecorderComponent implements OnInit {

    @Input() job_name: string = "";
    @Input() question: Observable<Question>;

    public myQuestion: Question;

    public video_contraints = { "video": { width: { max: 320 } }, "audio": true };
    public videoStream: MediaStream;
    public videoRecorder;
    public videoRecordedChunks = [];

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

    download() {
        if (this.videoRecorder.state == 'recording') this.stop();
        var video = new Blob(this.videoRecordedChunks, { type: "video/mp4" }); // for video
        var video_url = URL.createObjectURL(video);
        this.download_local(video_url, 'mp4');
        this.is_video_submitted = true;
    }

    download_local(url, extension) {
        var a = window.document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = `${this.job_name}.${extension}`;
        a.click();
        setTimeout(function () { URL.revokeObjectURL(url); }, 100);
    }

    reset() {
        this.is_video_playing = false;
        this.is_video_submitted = false;
        this.videoRecordedChunks = [];
        this.videoRecorder = undefined;
        this.videoStream = null;
    }
}