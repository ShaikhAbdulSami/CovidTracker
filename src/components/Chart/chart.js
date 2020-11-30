import React, { useState } from 'react'

// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";


export function Chart({dailyData}) {

    //dailyData = dailyData.slice(130,dailyData.length);
    
    const months = [ "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ]
    let chartExample1 = {
        data1: canvas => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
          gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
          gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
          return {
            labels: dailyData.map( data => months[new Date(data.reportDate).getMonth()]),
            datasets: [
              {
                label: "Confirmed",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#1f8ef1",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#1f8ef1",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#1f8ef1",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: dailyData.map( data => data.confirmed.total )
              }
            ]
          };
        },
        data2: canvas => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
          gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
          gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
          return {
            labels: dailyData.map( data => months[new Date(data.reportDate).getMonth()]),
            datasets: [
              {
                label: "Deaths",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#e14eca",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#ff0000",
                pointBorderColor: "rgba(12,12,12,0)",
                pointHoverBackgroundColor: "#ff0000",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: dailyData.map( data => data.deaths.total )
              }
            ]
          };
        },
        data3: canvas => {
          let ctx = canvas.getContext("2d");
      
          let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
      
          gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
          gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
          gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
      
          return {
            labels: dailyData.map( data => months[new Date(data.reportDate).getMonth()]),
            datasets: [
              {
                label: "Recovered",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#2dce89",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#2dce89",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#2dce89",
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: dailyData.map( data => data.recovered.total )
              }
            ]
          };
        },
        options: {
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            tooltips: {
              backgroundColor: "#f5f5f5",
              titleFontColor: "#333",
              bodyFontColor: "#666",
              bodySpacing: 4,
              xPadding: 12,
              mode: "nearest",
              intersect: 0,
              position: "nearest"
            },
            responsive: true,
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    suggestedMin: 60,
                    suggestedMax: 125,
                    padding: 20,
                    fontColor: "#9a9a9a"
                  }
                }
              ],
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.1)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    padding: 0,
                    fontColor: "#9a9a9a"
                  }
                }
              ]
            }
        }
    };

    const [bigChartData, setbigChartData] = useState("data1")

    return (
        <>
            <Row>
                <Col xs="12">
                <Card className="card-chart">
                    <CardHeader>
                    <Row>
                        <Col className="text-left" sm="6">
                        <h5 className="card-category">Last Year </h5>
                        <CardTitle tag="h2">Total Cases</CardTitle>
                        </Col>
                        <Col sm="6">
                        <ButtonGroup
                            className="btn-group-toggle float-right"
                            data-toggle="buttons"
                        >
                            <Button
                                tag="label"
                                className={classNames("btn-simple", {
                                    active: bigChartData === "data1"
                                })}
                                color="info"
                                id="0"
                                size="sm"
                                onClick={() => setbigChartData("data1")}
                            >
                            <input
                                defaultChecked
                                className="d-none"
                                name="options"
                                type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                Confirmed
                            </span>
                            <span className="d-block d-sm-none">
                                <i className="tim-icons icon-sound-wave" />
                            </span>
                            </Button>
                            <Button
                            color="danger"
                            id="1"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                                active: bigChartData === "data2"
                            })}
                            onClick={() => setbigChartData("data2")}
                            >
                            <input
                                className="d-none"
                                name="options"
                                type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                Deaths
                            </span>
                            <span className="d-block d-sm-none">
                                <i className="tim-icons icon-alert-circle-exc " />
                            </span>
                            </Button>
                            <Button
                            color="success"
                            id="2"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                                active: bigChartData === "data3"
                            })}
                            onClick={() => setbigChartData("data3")}
                            >
                            <input
                                className="d-none"
                                name="options"
                                type="radio"
                            />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                Recover
                            </span>
                            <span className="d-block d-sm-none">
                                <i className="tim-icons icon-bulb-63" />
                            </span>
                            </Button>
                        </ButtonGroup>
                        </Col>
                    </Row>
                    </CardHeader>
                    <CardBody>
                    <div className="chart-area" style={{height: '50vh'}} >
                        <Line
                            data={chartExample1[bigChartData]}                            
                            options={chartExample1.options}
                        />
                    </div>
                    </CardBody>
                </Card>
                </Col>
            </Row>     
        </>
    )
}

export default Chart;