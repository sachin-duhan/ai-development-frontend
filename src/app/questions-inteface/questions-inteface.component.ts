import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../@types/type';

@Component({
    selector: 'app-questions-inteface',
    templateUrl: './questions-inteface.component.html'
})

export class QuestionsIntefaceComponent implements OnInit {

    public job_id: string;
    public active_question: Question;

    constructor(private activatedRoute: ActivatedRoute) { }

    questions_list: Array<Question> = [
        { id: "1", question: 'Hello, Kindly introduce yourself.' },
        { id: "2", question: 'Tell me something about your experience.' },
        { id: "3", question: 'How will you cop-up with stress and job life balance?' },
        { id: "4", question: 'Why should we select you?' },
    ]

    public shared_question: BehaviorSubject<Question> = new BehaviorSubject(this.questions_list[0]);


    ngOnInit() {
        this.active_question = this.questions_list[0];
        this.activatedRoute.params
            .subscribe((params: Params) => this.job_id = params.id ? params.id : "1");
    }

    update_question(item: Question) {
        this.active_question = item;
        this.shared_question.next(item);
    }

    ngOnDestroy() {
        this.shared_question.unsubscribe();
    }
}