import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Heading, Paragraph, Image, Spinner } from '../../Atoms';
import { Col } from 'react-bootstrap';

const Item = () => {
  const [loading, setLoading] = useState(true);
  const [itemDetails, setItemDetails] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const getUniqueItem = async (id) => {
    try {
      setLoading(true);
      const results = await fetch(`http://localhost:5000/v1/unique/${id}`);
      const jsonResults = await results.json();
      setItemDetails(jsonResults);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUniqueItem(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return loading ? <Spinner /> : <>
    {error && <p className="text-danger">error</p>}
    {itemDetails && itemDetails.length > 0 ? itemDetails.map(
      (v, i) =>
        <div key={i} className="w-100 d-flex flex-column align-items-center justify-content-center">
          <div>
            <Heading type="h2" text={v.name} />
          </div>
          <Col xs="12" md="4">
            <Image src={v.thumbnail} alt={v.name} />
          </Col>
          <div className="d-flex align-items-center justify-content-center text-center w-50 mt-2">
            <div>
              <Heading type="h3" text="Age" />
              <Paragraph text={v.age} />
              <Heading type="h3" text="Hair Color" />
              <Paragraph text={v.hair_color} />
              <Heading type="h3" text="Height" />
              <Paragraph text={v.height} />
              <Heading type="h3" text="Weight" />
              <Paragraph text={v.weight} />
            </div>
          </div>
        </div>
    ) : 'No item found...'}
  </>;
};

export default Item;
