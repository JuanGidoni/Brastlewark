import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Heading, Paragraph, Image } from '../../Atoms';
import { useDataContext } from '../../Contexts/Data';

const Item = () => {
 const { setError } = useDataContext();
 const [itemDetails, setItemDetails] = useState([]);
 const { id } = useParams();


 const getUniqueItem = async (id) => {
  try {
   const results = await fetch(`http://localhost:5000/v1/unique/${id}`);
   const jsonResults = await results.json();
   setItemDetails(jsonResults);
  } catch (err) {
   setError(err);
  }
 }

 useEffect(() => {
  getUniqueItem(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [id]);

 return (
  <>
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
       <Paragraph text={v.age} />
       <Paragraph text={v.hair_color} />
      </div>
      <div className="d-flex align-items-center justify-content-between w-50">
       <Paragraph text={v.height} />
       <Paragraph text={v.weight} />
      </div>
     </div>
   ) : 'No item found...'}
  </>
 );
};

export default Item;
