const Heading = ({ type, text, className }) => {
 const h1 = <h1 className={className}>{text}</h1>;
 const h2 = <h2 className={className}>{text}</h2>;
 const h3 = <h3 className={className}>{text}</h3>;

 if (type === "h1") return h1;
 if (type === "h2") return h2;

 return h3;
};

export default Heading;
