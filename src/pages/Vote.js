import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../custom.css';
import { STATEMENTS } from '../data/statements';

const VotePage = () => {
    const [statements, setStatements] = useState(STATEMENTS);

    const handleVote = (index, type) => {
        setStatements(prevStatements => {
            const updatedStatements = [...prevStatements];
            if (type === 'agree') {
                updatedStatements[index].agree++;
            } else if (type === 'disagree') {
                updatedStatements[index].disagree++;
            }
            return updatedStatements;
        });
    };

    const randomIndex = Math.floor(Math.random() * statements.length);
    const randomStatement = statements[randomIndex];
    console.log(randomStatement);

    return (
        <div className="light-theme" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
            <Container fluid>
                <Row className="text-center">
                    <Col><h1>{randomStatement.statement}</h1></Col>
                </Row>
                <Row className="text-center">
                    <p>{randomStatement.author} - {randomStatement.posted}</p>
                </Row>
                <Row className="text-center" style={{ padding: '20px' }}>
                    <Col>
                        <button className='btn btn-success btn-lg' style={{ width: '150px', margin: '10px' }} onClick={() => handleVote(randomIndex, 'agree')}>Agree</button>
                        <button className='btn btn-secondary btn-lg' style={{ width: '150px', margin: '10px' }} >Skip</button>
                        <button className='btn btn-danger btn-lg' style={{ width: '150px', margin: '10px' }} onClick={() => handleVote(randomIndex, 'disagree')}>Disagree</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default VotePage;
