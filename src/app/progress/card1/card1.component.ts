import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements AfterViewInit {
  @ViewChild('doughnutChart') doughnutChartRef: any;

  ngAfterViewInit(): void {
    const data = {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [35, 65],
        backgroundColor: [
          'rgba(255, 255, 255, 0.2)', // Make the first segment transparent
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: data,
    };

    const ctx = this.doughnutChartRef.nativeElement.getContext('2d');
    const chart = new Chart(ctx, config);

    // Adjust the data to create a loading bar effect
    chart.data.datasets[0].data[0] = 0; // Set the value to 0 for the first segment
    chart.update(); // Update the chart to reflect the changes
  }
}
