import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import {Col, Container, Form, Row} from 'react-bootstrap';


export default function Week()
{
    const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const { totalTime, setTotalTime } = useState({});

    const saveTotalTime = () => {

    }

    return(
        <div>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h2>Week 1</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Form>
                        {weekdays.map((weekday) =>
                            <Form.Group as={Row} className="mb-3 form-group" controlId="formHorizontal">
                                <Form.Label column sm={2}>
                                { weekday }
                                </Form.Label>
                                <Col sm={{span: 1, offset: 9}}>
                                <Form.Control type="time" value="00:00" />
                                </Col>
                            </Form.Group>
                        )}
                        </Form>
                    </Row>
            </Container>

        </div>
    )
}