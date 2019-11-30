import React from "react";
import Chart from "react-apexcharts"
import './index.scss';

export class BarChart extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            options: {
                chart: {
                    stacked: true,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"]
                },
                title: {
                    text: this.props.title,
                    style: {
                        fontSize: '22px'
                    }
                },
                xaxis: {
                    categories: ['2','3','4'],
                    // categories: ['2. Обратили внимание','3. Получили промокод', '4. Купили по промокоду'],
                    labels: {
                        formatter: function(val: any) {
                            return val + " чел.";
                        }
                    }
                },
                yaxis: this.props.reversed ? {
                    reversed: this.props.reversed,
                    labels: {
                        // rotate: -45,
                        style: {
                            fontSize: '12px',
                        },
                    },
                    title: {
                        text: undefined
                    }
                } : {
                    labels: {
                        show: false
                    }
                },
                tooltip: {
                    y: {
                        formatter: function(val: any) {
                            return val + " чел.";
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                dataLabels: {
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Ubuntu, sans-serif',
                        fontWeight: 'bold'
                    },
                    dropShadow: {
                        enabled: true,
                        top: 1,
                        left: 1,
                        blur: 1,
                        opacity: 1
                    }
                },
                legend: {
                    position: "top",
                    horizontalAlign: "left",
                    offsetX: 40
                },
                colors: this.props.colors
            },
            series: this.props.data
        };
    }

    // data: {
    //     women: [
    //         {
    //             name: "Возраст 16 - 25",
    //             data: [44, 33, 22, 11]
    //         },
    //         {
    //             name: "Возраст 26 - 35",
    //             data: [44, 33, 22, 11]
    //         },
    //         {
    //             name: "Возраст 35+",
    //             data: [44, 33, 22, 11]
    //         },
    //     ],
    //     men: [
    //         {
    //             name: "Возраст 16 - 25",
    //             data: [44, 33, 22, 11]
    //         },
    //         {
    //             name: "Возраст 26 - 35",
    //             data: [44, 33, 22, 11]
    //         },
    //         {
    //             name: "Возраст 35+",
    //             data: [44, 33, 22, 11]
    //         },
    //     ],
    //     categories: ['1. Проходы','2. Обратили внимание','3. Получили промокод', '4. Купили по промокоду']
    // }

    render() {
        return (
            <div id="chart">
                {console.log(this.props.data)}
                {this.props.data &&
                    <Chart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height="350"
                    />
                }

            </div>
        );
    }
}
