import { Component, OnInit } from '@angular/core';
import { Candidate, Technology, Program } from '../@types/type';
import * as _backend from '../@data/main';

@Component({
    selector: 'app-program-manager',
    templateUrl: './program-manager.component.html'
})

export class ProgramManagerComponent implements OnInit {

    selected_candidates: Array<Candidate> = [];
    intrested_candidate: Array<Candidate> = _backend.candidate_list;;
    filters: Array<Technology> = _backend.filters_list;

    jobs_list: Array<Program> = _backend.jobs_list;
    constructor() { }

    ngOnInit() { }

    update_selected_list(item: Candidate): void {
        const i = this.selected_candidates.indexOf(item);
        if (i == -1) this.selected_candidates.push(item);
        else this.selected_candidates.splice(i, 1);
    }

}