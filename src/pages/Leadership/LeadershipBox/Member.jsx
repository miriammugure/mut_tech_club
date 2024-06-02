import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Member = ({
  picture,
  linkedInUrl,
  fbUrl,
  IgUrl,
  twitterUrl,
  fullname,
  roles,
  biographies,
}) => {
  return (
    <div className="membersBox">
      <div className="pictureWrapper">
        <img src={picture} alt={`an image of ${fullname}`} />
        <div className="socialLinks">
          {twitterUrl && (
            <Link to={twitterUrl}>
              <FaSquareXTwitter />
            </Link>
          )}
          {IgUrl && (
            <Link to={IgUrl}>
              <IoLogoInstagram />
            </Link>
          )}
          {linkedInUrl && (
            <Link to={linkedInUrl}>
              <FaLinkedin />
            </Link>
          )}
          {fbUrl && (
            <Link to={fbUrl}>
              <FaFacebook />
            </Link>
          )}
        </div>
      </div>
      <div className="memberBody">
        <div className="memberName">
          <h2>{fullname}</h2>
        </div>
        <div className="memberRole">
          {" "}
          <h4>{roles}</h4>
        </div>
        <div className="memberBiograpghy">
          <p>{biographies}</p>
        </div>
      </div>
    </div>
  );
};
export default Member;
