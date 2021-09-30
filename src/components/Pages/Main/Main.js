import { useEffect, useState } from 'react';
import { Card } from '../../Molecules';
import { Heading, NavLink, Image, Spinner } from '../../Atoms';
import { Col, Row } from 'react-bootstrap';
import './Main.css';

const Main = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const results = await fetch('http://localhost:5000/v1');
      const jsonResults = await results.json();
      setData(jsonResults.Brastlewark);
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [])

  return loading ? <Spinner /> : <main className="d-flex flex-col align-items-center justify-content-center py-3">
    <Row className="p-0 m-0">
      {error && <p className="text-danger">error</p>}
      {data && data.length > 0 ? data.map(
        (v, i) =>
          <Col xs='12' md="6" lg="4" className="p-0 m-0">
            <NavLink to={`/item/${v.id}`} className="m-1">
              <Card className="card">
                <Heading type="h2" text={v.name} className="text-primary text-center p-0 m-0" />
                <Image src={v.thumbnail} alt={v.name} />
              </Card>
            </NavLink>
          </Col>
      ) : 'No data found...'}
    </Row>
  </main>;
}

export default Main
