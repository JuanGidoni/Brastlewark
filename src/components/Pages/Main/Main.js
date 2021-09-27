import { Card } from '../../Molecules';
import { Heading, Paragraph, NavLink } from '../../Atoms';
import './Main.css';
import { Col, Row } from 'react-bootstrap';

const Main = () => {
 return (
  <main className="d-flex flex-col align-items-center justify-content-center py-3">
   <Row>
    <Col md="6">
     <NavLink to="/welcome">
      <Card className="card">
       <Heading type="h1" text="Welcome" className="h1 text-primary text-center" />
       <Paragraph text="Welcome to Brastlewark" />
      </Card>
     </NavLink>
    </Col>
    <Col md="6">
     <NavLink to="/welcome">
      <Card className="card">
       <Heading type="h1" text="Welcome" className="h1 text-primary text-center" />
       <Paragraph text="Welcome to Brastlewark" />
      </Card>
     </NavLink>
    </Col>
    <Col md="6">
     <NavLink to="/welcome">
      <Card className="card">
       <Heading type="h1" text="Welcome" className="h1 text-primary text-center" />
       <Paragraph text="Welcome to Brastlewark" />
      </Card>
     </NavLink>
    </Col>
    <Col md="6">
     <NavLink to="/welcome">
      <Card className="card">
       <Heading type="h1" text="Welcome" className="h1 text-primary text-center" />
       <Paragraph text="Welcome to Brastlewark" />
      </Card>
     </NavLink>
    </Col>
   </Row>
  </main>
 )
}

export default Main
