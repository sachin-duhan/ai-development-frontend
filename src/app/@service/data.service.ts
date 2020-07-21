import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(private http: HttpClient) { }

    public headers = new HttpHeaders({
        'Content-Type': 'multipart/form-data'
    });

    private _resume_API_URL = "https://bitgrit-resume-api.herokuapp.com/api";

    upload_resume(data): Observable<any> {
        return this.http.post<any>(this._resume_API_URL, data, {
            headers: this.headers
        });
    }

}
