import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  multiAxisData : any;
  multiAxisOptions : any;


  profitAndLossData :  any;
  profitAndLossOptions: any;

  lineData: any;

  constructor() { 
  this.multiAxisData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: 'text',
          backgroundColor: [
              '#EC407A',
              '#AB47BC',
              '#42A5F5',
              '#7E57C2',
              '#66BB6A',
              '#FFCA28',
              '#26A69A'
          ],
          yAxisID: 'y',
          data: [3000, 4000, 5000, 9000, 13000, 7000, 3000]
      }, {
          label: 'text2',
          backgroundColor: '#78909C',
          yAxisID: 'y1',
          data: [4000, 9000, 13000, 12000, 15900, 20000, 50000]
      }]
  };

  this.multiAxisOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            },
            tooltips: {
                mode: 'index',
                intersect: true
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    min: 0,
                    max: 100,
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                    color: '#ebedef'
                },
                ticks: {
                    min: 0,
                    max: 100,
                    color: '#495057'
                }
            }
        }
  };

  this.profitAndLossData = {
    labels: ['PHP','Javascript','NodeJS','Html','CSS'],
    datasets: [
      {
        backgroundColor: [
            '#EC407A',
            '#AB47BC',
            '#42A5F5',
            '#7E57C2',
            '#26A69A'
        ],
        yAxisID: 'y',
        data: [100,120,300,400,500 ]
    },
  ]
  };

  this.lineData = {
    labels: ['PHP','Javascript','NodeJS','Html','CSS'],
    datasets: [
        {
            label: 'Dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [400,120,300,400,500 ]
        }
        ]
    }




  }



  ngOnInit(): void {
  }



}
