const Card = ({ image, fullname, text }) => {
  return (
    <div className="cardBox">
      <div className="imageWrapper">
        <img src={image} alt={`an image of ${fullname}`} />
      </div>
      <div className="cardBody">
        <h3 className="cardBodyMain">{fullname}</h3>
        <p className="cardBodyText">{text}</p>
      </div>
    </div>
  );
};
export default Card;
