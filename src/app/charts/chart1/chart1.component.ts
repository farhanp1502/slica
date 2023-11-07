import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit, AfterViewInit {
  chart: any;

  ngOnInit(): void {
    const labels = [' ', ' ', ' ', ' ', ' ', ' ', ' ']; // Your custom labels
    const data = {
      labels: labels,
      datasets: [{
        data: [0, 30, 29, 50, 49, 70, 69, 100], // Your custom data values
        fill: true, // Fill the area under the line
        borderColor: '#E5EDFA', // Set line color to red
        backgroundColor: '#E5EDFA', // Set fill color to light red with opacity
        tension: 0.5,
        pointRadius: 0 // Set the point radius to 0 to hide data points
      }]
    };

    this.createChart(labels, data);
  }

  ngAfterViewInit(): void {
    this.chart.update();
  }

  createChart(labels: string[], data: any): void {
    const ctx: any = document.getElementById('myChart'); // Use getElementById to target the specific canvas
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          plugins: {
            legend: {
              display: false // Hide legend
            },
            tooltip: {
              enabled: false // Disable tooltip
            }
          },
          scales: {
            x: {
              display: false,
              type: 'category',
              labels: labels,
              grid: {
                display: false // Remove horizontal grid lines
              }
            },
            y: {
              display: false, // Hide Y-axis labels
              grid: {
                display: false // Remove vertical grid lines
              }
            }
          }
        }
      });
    }
  }
}
