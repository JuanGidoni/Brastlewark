import "./Card.css";

const Card = ({ children, className }) => {
 return (
  <div className={className}>
   {children}
  </div>
 )
}

export default Card;
