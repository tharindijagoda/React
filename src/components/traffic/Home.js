import React from 'react';
//import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
//import Container from 'react-bootstrap';
import { Container,Row, Col } from 'react-bootstrap';
import CourtCall from './CourtCall';
import CaseInfo from './CaseInfo';
import PdfDisplay from './PdfDisplay';

function Home() {
  return (
    <div className="">
    <Container>
        <Row>
          {/*Left side panel  */}
          <Col>
              <CourtCall></CourtCall>
          </Col>
          
          {/*Middle side panel */}
          <Col lg={6}>
              <CaseInfo></CaseInfo>
          </Col>
          
          
          {/*Right side panel */}
          <Col>
              <PdfDisplay></PdfDisplay>
          </Col>
        </Row>

    </Container>

    </div>
  );
}

export default Home;
