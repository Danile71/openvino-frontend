import * as React from "react";
import Chart from "react-apexcharts";

export class FullChart extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            options: {
                chart: {
                    stacked: true,
                    stackType: '100%',
                    toolbar: {
                        show: false
                    },
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
                    style: {
                        fontSize: '22px'
                    }
                },
                xaxis: {
                    labels: {
                        show: false,
                    },
                    categories: ['1'],
                },
                yaxis: {
                    labels: {
                        style: {
                            fontSize: '12px'
                        },
                    },
                    title: {
                        text: undefined
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
                        fontSize: '14px'
                    },
                    formatter: (val: any, opt: any) => {
                        return 'Всего проходов: ' + opt.w.globals.seriesTotals
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

    render() {
        return (
            <div id="chart" style={{paddingRight: '38px'}}>
                {this.props.data &&
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height="150"
                />
                }
            </div>
        );
    }
}
