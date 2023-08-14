import React from 'react'
import { Container,Row,Card, Col } from 'react-bootstrap'
import { CrimeDataResponseType } from '../type';

const CrimeTablee = ({crimeInfo, postcode} : {crimeInfo: CrimeDataResponseType; postcode: string}) => {
  return (
    <Container >
    <Row>
        <Col style={{ display: 'block', width: 300, padding: 10 }}>
            <Card style={{ width: '28rem' }}>
                <Card.Header><b>Crime Information</b></Card.Header>
                <Card.Body>
                    <Card.Title>Crime Category: <b>{crimeInfo?.category} </b></Card.Title>
                    <Card.Text>Crime Date: <b>{crimeInfo?.month}</b> </Card.Text>
                    <Card.Text>Street Name: <b>{crimeInfo?.location?.street?.name} </b> </Card.Text> 
                    <Card.Text>Outcome Status: <b>{crimeInfo?.outcome_status?.category} </b> </Card.Text>
                    <Card.Text>Post Code: <b>{postcode} </b> </Card.Text> 
                </Card.Body>
            </Card>
        </Col>
    </Row>
</Container>
  )
}

export default CrimeTablee
