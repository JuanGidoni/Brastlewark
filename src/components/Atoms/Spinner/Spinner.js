import './Spinner.css';

const Spinner = () => {
 return (
  <div className="spinner">
   <div className="spinner-grow" role="status">
    <span className="sr-only ">Loading...</span>
   </div>
  </div>
 );
};

export default Spinner;
