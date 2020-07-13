import { Component, OnInit } from '@angular/core';
import { Candidate, Technology } from '../@types/type';

@Component({
    selector: 'app-program-manager',
    templateUrl: './program-manager.component.html'
})

export class ProgramManagerComponent implements OnInit {

    selected_candidates: Array<Candidate> = [];

    constructor() { }

    ngOnInit() { }

    filters: Array<Technology> = [
        { title: 'Python' },
        { title: 'Data Science' },
        { title: 'Machine Learning' },
        { title: 'AWS' },
        { title: 'Azure DevOps' },
        { title: 'Data Engineer' }
    ];

    update_selected_list(item: Candidate): void {
        const i = this.selected_candidates.indexOf(item);
        if (i == -1) this.selected_candidates.push(item);
        else this.selected_candidates.splice(i, 1);
    }

    intrested_candidate: Array<Candidate> = [
        {
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
            name: 'Sachin Duhan',
            email: 'abc@gmail.com',
            id: '1',
            skills: [{ title: 'Python' }, { title: 'AWS' }, { title: 'Azure' }, { title: 'Developer' }],
        },
        {
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
            name: 'Aniket', email:
                'cdsn@gmail.com', id:
                '2', skills: [{ title: 'Python' }, { title: 'Mahcine Learning' }, { title: 'Artificial Intelligence' }],
        },
        {
            bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
            name: 'Manoj Pandey',
            email: 'abc@gmail.com',
            id: '3',
            skills: [{ title: 'Python' }, { title: 'Artificial Intelligence' }, { title: 'Developer' }],
        },
    ];
}