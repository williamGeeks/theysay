import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../custom.css';

const VotePage = () => {
    return (
        <div className="dark-theme" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
            <Container>
                <Row className="justify-content-center">
                    <h1 className="text-center" style={{ margin: '50px' }}>"The earth is flat."</h1>
                </Row>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <button className='btn btn-success btn-lg'  style={{ width: '200px', margin: '10px' }} >Agree</button>
                        <button className='btn btn-secondary btn-lg' style={{ width: '200px', margin: '10px' }} >Skip</button>
                        <button className='btn btn-danger btn-lg' style={{ width: '200px', margin: '10px' }} >Disagree</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default VotePage;