import { Component, OnInit } from '@angular/core';
const _backend_dummy_data = require('../@data/response.json');
const v_text = require('../@data/main');
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
    loading: boolean = false;
    video_text: string = v_text.video_text;
    ngOnInit() {
        this.loading = true;
        setTimeout(() => {
            this.setter();
        }, 8000);
    }

    setter() {
        // adding the personality data
        _backend_dummy_data.personality.forEach(personality => {
            this.personality_labels.push(personality.name);
            let val = parseFloat((personality.percentile * Math.random() * 100).toFixed(2))
            this.personality_data[0].data.push(val);
            this.colors[0].backgroundColor.push('#5b3e80');
        })
        // adding the values 
        _backend_dummy_data.values.forEach(values => {
            this.values_labels.push(values.name);
            this.values_data[0].data.push(parseFloat((values.percentile * 100).toFixed(2)));
        })
        this.loading = false;
    }
}
