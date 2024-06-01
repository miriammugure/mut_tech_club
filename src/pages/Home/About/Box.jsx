const Box = ({ icon, value, text }) => {
  return (
    
    <div className="valueBox">
      <div className="iconWrapper">{icon}</div>
      <div className="valueBody">
        <h3 className="valueBodyMain">{value}</h3>
        <p className="valueBodyText">{text}</p>
      </div>
    </div>
    
  );
};
export default Box;
