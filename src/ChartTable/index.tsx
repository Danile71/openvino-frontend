import * as React from "react";
import { Row, Col } from "react-bootstrap";
import './index.scss';

export const ChartTable = ({genderData, data}: any) => {

    const calculatedData = [
        {
          label: '1. Всего проходов',
          value: data[0].data[0]
        },
        {
          label: '2. Всего обратили внимаение',
          value: genderData.Total[0]
        },
        {
          label: '3. Всего получено промокодов',
          value: genderData.Total[1]
        },
        {
          label: '4. Всего покупок с промокодом',
          value: genderData.Total[2]
        }
    ];

    return (
        <div>
            {console.log(genderData)}
            <Row noGutters={true}>
                <Col sm={6}>
                    <Row noGutters={true}>
                        <Col sm={{ span: 7, offset: 3 }}>
                            <div className="label">
                                1. Всего проходов
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className="value">
                                {calculatedData[0].value}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row noGutters={true}>
                        <Col sm={{ span: 7, offset: 3 }}>
                            <div className="label">
                                2. Обратили внимание
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className="value">
                                {calculatedData[1].value}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row noGutters={true}>
                        <Col sm={{ span: 7, offset: 3 }}>
                            <div className="label">
                                3. Получили промокод
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className="value">
                                {calculatedData[2].value}
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row noGutters={true}>
                        <Col sm={{ span: 7, offset: 3 }}>
                            <div className="label">
                                4. Использовали промокод
                            </div>
                        </Col>
                        <Col sm={2}>
                            <div className="value">
                                {calculatedData[3].value}
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
};