import * as React from "react";
import Chart from 'react-apexcharts';

export class DonutChart extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            options: {
                title: {
                    text: this.props.title,
                    style: {
                        fontSize: '22px'
                    }
                },
                labels: this.props.labels,
                dataLabels: {
                    style: {
                        fontSize: '17px',
                        fontFamily: 'Ubuntu, sans-serif',
                        fontWeight: 'bold'
                    },
                    dropShadow: {
                        blur: 3,
                        opacity: 0.8
                    }
                },
                legend: {
                    position: 'bottom',
                    fontSize: '14px',
                    fontFamily: 'Ubuntu, sans-serif',
                    fontWeight: 'bold'
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '54%',
                            labels: {
                                style: {
                                    fontSize: '20px',
                                    fontFamily: 'Ubuntu, sans-serif',
                                    fontWeight: 'bold'
                                },
                                show: true,
                                total: {
                                    showAlways: true,
                                    show: true,
                                    label: 'Всего',
                                    style: {
                                        fontSize: '20px',
                                        fontFamily: 'Ubuntu, sans-serif',
                                        fontWeight: 'bold'
                                    },
                                }
                            }
                        }
                    }
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            series: this.props.series
        }
    }

    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="donut" width="340"/>
            </div>
        )
    }
}