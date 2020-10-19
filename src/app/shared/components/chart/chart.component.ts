import { Component, Input, OnInit } from "@angular/core";
declare const Chart;

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"],
})
export class ChartComponent implements OnInit {
  @Input("id") id: string;
  @Input("data") data: { date: string; value: string }[];

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    if (this.data) {
      const ctx = (document.getElementById(
        this.id
      ) as HTMLCanvasElement).getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: this.data.map((data) => data.date).reverse(),
          datasets: [
            {
              borderColor: "#597cbe",
              pointRadius: 0,
              fill: false,
              //backgroundColor: gradient,
              data: this.data.map((data) => data.value),
            },
          ],
        },
        options: {
          animation: {
            duration: 0,
          },
          legend: {
            display: false,
          },
          tooltips: {
            enabled: false,
          },
          scales: {
            xAxes: [
              // {
              //   ticks: {
              //     display: false, //this will remove only the label
              //   },
              //   gridLines: {
              //     tickMarkLength: false,
              //     display: false,
              //     drawBorder: false,
              //   },
              // },
            ],
            yAxes: [
              // {
              //   ticks: {
              //     display: false, //this will remove only the label
              //   },
              //   gridLines: {
              //     tickMarkLength: false,
              //     display: false,
              //     drawBorder: false,
              //   },
              // },
            ],
          },
        },
      });
    }
  }
}
