import { Component, OnInit, Inject } from '@angular/core';
import * as moment from 'moment';
import { Task } from '../shared/task.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-todo-diagram',
  templateUrl: './todo-diagram.component.html',
  styleUrls: ['./todo-diagram.component.scss']
})
export class TodoDiagramComponent implements OnInit {


  taskList: Task[];
  chartTypes = [
    {value: 'bar', viewValue: 'Bar'},
    {value: 'line', viewValue: 'Line'},
    {value: 'radar', viewValue: 'Radar'}
  ];


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            stepSize: 1,
            beignAtZero: true
          }
        }
      ]
    }
  };
  public barChartLabels: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(public dialogRef: MatDialogRef<TodoDiagramComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.taskList = data.taskList;
  }

  ngOnInit() {
    // calculation
    const tasksInDay = [0, 0, 0, 0, 0, 0, 0];
    this.taskList.forEach(task => {
      const wkday = moment(task.created).weekday() - 1;
      tasksInDay[wkday]++;
    });
    this.barChartData.push({
      data: tasksInDay,
      label: 'Tasks created'
    });
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  closeDialog() {
    this.dialogRef.close('Pizza!');
  }

}
