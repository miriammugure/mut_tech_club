const Track = ({ trackImg, trackName, trackDescription }) => {
  return (
    <div className="trackBox">
      <div className="TrackImg">
        <img src={trackImg} alt={`an image of ${trackName}`} />
      </div>
      <div className="trackBody">
        <div className="trackMain">
          <h2>{trackName}</h2>
        </div>
        <div className="trackSub">
          <p>{trackDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Track;
