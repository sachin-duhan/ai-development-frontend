import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }
    public headers = new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT"
    });

    private _resume_API_URL = "https://bitgrit-resume-api.herokuapp.com/api";
    private _video_API_URL = 'https://0b76206aa00f.ngrok.io';

    public upload_resume(data): Observable<any> {
        return this.http.post<any>(this._resume_API_URL, data, { headers: this.headers });
    }

    public get_video_data(): Observable<any> {
        return this.http.get<any>(`${this._video_API_URL}/firebase`, { headers: this.headers });
    }

    public upload_video(data): Observable<any> {
        return this.http.post<any>(this._video_API_URL, data, { headers: this.headers });
    }
}
