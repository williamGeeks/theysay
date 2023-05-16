import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../custom.css';

const VotePage = () => {
    return (
        <div className="dark-theme" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
            <Container>
                <Row className="justify-content-center">
                    <h1 className="text-center" style={{ margin: '50px' }}>Is the earth flat?</h1>
                </Row>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <button className='btn btn-primary btn-lg'  style={{ width: '200px', margin: '10px' }} >Yes</button>
                        <button className='btn btn-secondary btn-lg' style={{ width: '200px', margin: '10px' }} >No</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default VotePage;