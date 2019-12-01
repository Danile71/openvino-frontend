import {Col, Row, Container} from "react-bootstrap";
import {BarChart} from "../Chart";
import * as React from "react";
import { ChartTable } from "../ChartTable";
import {DonutChart} from "../DonutChart";
import {FullChart} from "../FullChart";
import animateScrollTo from 'animated-scroll-to';
import './index.scss';
import {useEffect, useRef} from "react";

export const Body = ({genderData, totalData}: any) => {

    const men = {
        colors: ['#46b3e6', '#4d80e4' ,'#2e279d'],
        title: 'Мужчины'
    };
    const women = {
        colors: ['#fffa62', '#ffcf7f', '#ff9090'],
        title: 'Женщины'
    };

    const bestMan = genderData.men[genderData.BestMan].name;
    const bestWoman = genderData.women[genderData.BestWoman].name;
    console.log(bestMan, bestWoman);

    const donuts = [
    {
        title: 'Эффективность галлереи',
        series: [totalData[0].data[0], genderData.TotalWomen.Total[0] + genderData.TotalMen.Total[0]],
        labels: [`Прошли (${totalData[0].data[0]})`, `Обратили внимание (${genderData.TotalWomen.Total[0] + genderData.TotalMen.Total[0]})`]
    },
    {
        title: 'Понравилось предложение',
        series: [genderData.TotalWomen.Total[0] + genderData.TotalMen.Total[0], 15],
        // series: [0, 0],
        labels: [`Обратили внимание (${genderData.TotalWomen.Total[0] + genderData.TotalMen.Total[0]})`, `Получили промокод (${15})`]
    },
    {
        title: 'Наш покупатель',
        series: [15, 8],
        labels: [`Получили промо-код (${15})`, `Купили товар (${8})`]
    }
    ];

    return (
        <Container fluid={true}>
            {/*{console.log([totalData.Total[0], genderData.TotalWomen.Total[0] + genderData.TotalMen.Total[0]])}*/}
        <h1 style={{padding: '40px 0 15px 0'}}>
            Воронка продаж
        </h1>
        <Row>
            <Col sm={12}>
                <FullChart data={totalData}/>
            </Col>
        </Row>
        <Row noGutters={true}>
            <Col sm={6}>
                <BarChart colors={women.colors} data={genderData.women && genderData.women} reversed={true} title={women.title}/>
                {totalData && genderData && <ChartTable genderData={genderData.TotalWomen} data={totalData}/>}
            </Col>
            <Col sm={6}>
                <BarChart colors={men.colors} data={genderData.men && genderData.men} reversed={false} title={men.title}/>
                {totalData && genderData && <ChartTable genderData={genderData.TotalMen} data={totalData}/>}
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <div className="arrow-block" onClick={() => animateScrollTo(900)}>
                    <div className="arrow-icon">
                    </div>
                </div>
            </Col>
        </Row>
            <h1 style={{padding: '60px 0 60px 0'}}>
                Портерет покупателя
            </h1>
        <Row>
            <Col sm={6}>
                <div className="people">
                    <div className="woman" />
                    <div className="age">
                        {bestWoman}
                    </div>
                </div>
            </Col>
            <Col sm={6}>
                <div className="people">
                    <div className="man" />
                    <div className="age">
                        {bestMan}
                    </div>
                </div>
            </Col>
        </Row>
            <h1 style={{padding: '60px 0 60px 0'}}>
                Конверсия
            </h1>
        <Row>
            <Col sm={4}>
                <DonutChart title={donuts[0].title} series={donuts[0].series} labels={donuts[0].labels}/>
            </Col>
            <Col sm={4}>
                <DonutChart title={donuts[1].title} series={donuts[1].series} labels={donuts[1].labels}/>
            </Col>
            <Col sm={4}>
                <DonutChart title={donuts[2].title} series={donuts[2].series} labels={donuts[2].labels}/>
            </Col>
        </Row>
        </Container>
    )
};

