import { Card } from '../../Molecules';
import { Heading, NavLink, Image } from '../../Atoms';
import './Main.css';
import { Col, Row } from 'react-bootstrap';
import { useDataContext } from '../../Contexts/Data';

const Main = () => {
 const { data } = useDataContext();

 return (
  <main className="d-flex flex-col align-items-center justify-content-center py-3">
   <Row className="p-0 m-0">
    {data && data.length > 0 ? data.map(
     (v, i) =>
      <Col md="4" className="p-0 m-0">
       <NavLink to={`/item/${v.id}`} className="m-1">
        <Card className="card">
         <Heading type="h2" text={v.name} className="text-primary text-center p-0 m-0" />
         <Image src={v.thumbnail} alt={v.name} />
        </Card>
       </NavLink>
      </Col>
    ) : 'No data found...'}
   </Row>
  </main>
 )
}

export default Main
