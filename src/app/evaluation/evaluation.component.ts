import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from '../@service/data.service';


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

    constructor(private _backend: DataService) { }

    public loading: boolean = false;
    public video_text: string = '';
    public userName: string = '';
    public response_list: Array<any> = [];

    ngOnInit() {
        this.loading = true;
        this._backend.get_video_data().subscribe(data => {
            Object.keys(data).forEach(key => this.response_list.push(data[key]));
            this.udpate_user_display_data(this.response_list.length - 1);
        });
    }

    udpate_user_display_data(index: number) {
        if (index < 0 || index >= this.response_list.length) return;
        const selected_user = this.response_list[index];
        this.userName = selected_user.username;
        this.video_text = selected_user.text;
        const Analysis = JSON.parse(selected_user.json);
        this.reset_graph();
        Analysis.personality.forEach(personality => {
            this.personality_labels.push(personality.name);
            let val = parseFloat((personality.percentile * Math.random() * 100).toFixed(2))
            this.personality_data[0].data.push(val);
            this.colors[0].backgroundColor.push('#5b3e80');
        })
        Analysis.values.forEach(values => {
            this.values_labels.push(values.name);
            this.values_data[0].data.push(parseFloat((values.percentile * 100).toFixed(2)));
        })
        this.loading = false;
    }

    private reset_graph() {
        this.colors = [{ backgroundColor: [] }];
        this.personality_data = [{ data: [], label: 'Personality' }];
        this.values_data = [{ data: [], label: 'Values' }];
        this.personality_labels = [];
        this.values_labels = [];
    }
}
