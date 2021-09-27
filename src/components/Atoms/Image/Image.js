const Image = ({ src, alt }) => {
 return (
  <img src={src} alt={alt} className="w-100 h-auto" style={{ objectFit: 'cover' }} />
 );
};

export default Image;
