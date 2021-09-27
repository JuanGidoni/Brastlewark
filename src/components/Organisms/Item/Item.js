import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Heading, Paragraph, Image, Spinner } from '../../Atoms';

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
        <div key={i} className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
          <div>
            <Heading type="h2" text={v.name} />
          </div>
          <div>
            <Image src={v.thumbnail} alt={v.name} />
          </div>
          <div className="d-flex align-items-center justify-content-between w-50">
            <div>
              <Heading type="h3" text="Age" />
              <Paragraph text={v.age} />
            </div>
            <div>
              <Heading type="h3" text="Hair Color" />
              <Paragraph text={v.hair_color} />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between w-50">
            <div>
              <Heading type="h3" text="Height" />
              <Paragraph text={v.height} />
            </div>
            <div>
              <Heading type="h3" text="Weight" />
              <Paragraph text={v.weight} />
            </div>
          </div>
        </div>
    ) : 'No item found...'}
  </>;
};

export default Item;
