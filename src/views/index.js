import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap'


import Detail from "../components/details/detail.js";
import Navegator from "../components/details/navegator.js";

import '../assets/css/main.css'
import '../assets/css/input.css'


export default function Index() {

    const [windows, setWindows] = useState('articles');

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Navegator setWindows={setWindows} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Detail windows={windows} />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}