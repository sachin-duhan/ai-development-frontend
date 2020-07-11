import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-questions-inteface',
    templateUrl: './questions-inteface.component.html',
    styleUrls: ['./questions-inteface.component.css']
})
export class QuestionsIntefaceComponent implements OnInit {

    job_id: string;
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params
            .subscribe((params: Params) => this.job_id = params.id ? params.id : "1");
    }

}
