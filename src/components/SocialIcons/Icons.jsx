import React from "react";
import "./Icons.css";
import {
  FaSquareXTwitter,
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaFacebookF,
} from "react-icons/fa6";

import { Link } from "react-router-dom";
const Icons = ({ twitterUrl, fbUrl, gitHubUrl, linkedInUrl, instaUrl }) => {
  return (
    <div className="IconBox">
      {twitterUrl && (
        <Link to={twitterUrl}>
          <FaSquareXTwitter />
        </Link>
      )}

      {gitHubUrl && (
        <Link to={gitHubUrl}>
          <FaGithub />
        </Link>
      )}

      {instaUrl && (
        <Link to={instaUrl}>
          <FaSquareInstagram />
        </Link>
      )}

      {fbUrl && (
        <Link to={fbUrl}>
          <FaFacebookF />
        </Link>
      )}

      {linkedInUrl && (
        <Link to={linkedInUrl}>
          <FaLinkedin />
        </Link>
      )}
    </div>
  );
};

export default Icons;
