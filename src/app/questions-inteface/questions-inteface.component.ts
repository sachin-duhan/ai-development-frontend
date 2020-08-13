import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import * as _backend from '../@data/main';
import { Question } from '../@types/type';

@Component({
    selector: 'app-questions-inteface',
    templateUrl: './questions-inteface.component.html'
})

export class QuestionsIntefaceComponent implements OnInit {

    public show_upload_button_for_selecting_video:boolean = false;
    public job_id: string;
    public active_question: Question;
    questions_list: Array<Question> = _backend.questions_list;
    public username:string = 'your Name?';

    constructor(private activatedRoute: ActivatedRoute) { }
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