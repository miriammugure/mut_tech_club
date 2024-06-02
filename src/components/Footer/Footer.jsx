import React from "react";
import "./Footer.css";
import Icons from "../SocialIcons/Icons";
function Footer() {
  return (
    <div>
      <div className="footer-container">
        <Icons
          twitterUrl={"twitter.com"}
          fbUrl={"facebook.com"}
          instaUrl={"instagram.com"}
          gitHubUrl={"github.com"}
          linkedInUrl={"linkedin.com"}
        />
        <p>&copy; 2024 miriam mugure wachira</p>
      </div>
    </div>
  );
}

export default Footer;
