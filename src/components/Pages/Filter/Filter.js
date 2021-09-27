import { useEffect, useState } from 'react';
import { Card } from '../../Molecules';
import { Heading, NavLink, Image, Spinner } from '../../Atoms';
import './Filter.css';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const Age = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const { id, type } = useParams();
  const getFilteredData = async (name, type) => {
    try {
      setLoading(true);
      const results = await fetch(`http://localhost:5000/v1/filter/${name}/${type}`);
      const jsonResults = await results.json();
      setData(jsonResults);
    } catch (err) {
      setError({ error: err });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFilteredData(id, type);
  }, [id, type]);

  return (
    <main className="d-flex flex-col align-items-center justify-content-center py-3">
      {error && <p className="text-danger">error</p>}
      {loading ? <Spinner /> :
        <Row className="p-0 m-0">
          {data && data.length > 0 ? data.map(
            (v, i) =>
              <Col key={i} md="4" className="p-0 m-0">
                <NavLink to={`/item/${v.id}`} className="m-1">
                  <Card className="card">
                    <Heading type="h2" text={v.name} className="text-primary text-center p-0 m-0" />
                    <Image src={v.thumbnail} alt={v.name} />
                  </Card>
                </NavLink>
              </Col>
          ) : 'No data found...'}
        </Row>}
    </main>
  );
};

export default Age;
