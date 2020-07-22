import { Component, OnInit } from '@angular/core';
const _backend_dummy_data = require('../@data/response.json');
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
    selector: 'app-evaluation',
    templateUrl: './evaluation.component.html'
})

export class EvaluationComponent implements OnInit {

    public options: ChartOptions = { responsive: true };
    public colors = [{ backgroundColor: [] }];
    public personality_labels: Label[] = [];
    public personality_data: ChartDataSets[] = [{ data: [], label: 'Personality' }];

    public values_labels: Label[] = [];
    public values_data: ChartDataSets[] = [{ data: [], label: 'Values' }];

    constructor() { }
    video_text: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo officiis, assumenda iure, nulla incidunt quia placeat voluptates quaerat perferendis sit accusantium unde nesciunt! Id quas deleniti accusamus! Aliquid, similique asperiores.';

    ngOnInit() {
        // adding the personality data
        _backend_dummy_data.personality.forEach(personality => {
            this.personality_labels.push(personality.name);
            this.personality_data[0].data.push(parseFloat((personality.percentile * 100).toFixed(2)));
            this.colors[0].backgroundColor.push('#5b3e80');
        })

        // adding the values 
        _backend_dummy_data.values.forEach(values => {
            this.values_labels.push(values.name);
            this.values_data[0].data.push(parseFloat((values.percentile * 100).toFixed(2)));
        })
    }
}
