import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-questions-inteface',
    templateUrl: './questions-inteface.component.html',
    styleUrls: ['./questions-inteface.component.css']
})

export class QuestionsIntefaceComponent implements OnInit {

    public job_id: string;
    public active_question: Question ;
    questions_list: Array<Question> = [
        { id: "1", question: 'Hello, Kindly introduce yourself.' },
        { id: "2", question: 'Tell me something about your experience.' },
        { id: "3", question: 'How will you cop-up with stress and job life balance?' },
        { id: "4", question: 'Why should we select you?' },
    ]

    constructor(private activatedRoute: ActivatedRoute) { }
    ngOnInit() {
        this.active_question = this.questions_list[0];
        this.activatedRoute.params
            .subscribe((params: Params) => this.job_id = params.id ? params.id : "1");
    }

}

interface Question { id: string, question: string };