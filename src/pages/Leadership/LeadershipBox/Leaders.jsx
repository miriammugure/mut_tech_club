import React from "react";
import "./Leadership.css";
import Member from "./Member";
import Title from "../../../components/Title/Title";
import ndiaImg from "../../../assets/ndia.jpg";
import victorineImg from "../../../assets/victorine.jpg";
import allanImg from "../../../assets/allan.jpg";
import bridgetImg from "../../../assets/bridget.jpg";
import ruthImg from "../../../assets/ruth.jpeg";
import websterImg from "../../../assets/webster.jpg";
import manaseImg from "../../../assets/manase.jpeg";
import shiroImg from "../../../assets/shiro.jpeg";
import stanleyImg from "../../../assets/stanley.jpg";
import paulImg from "../../../assets/paul.jpg";
import evyonnImg from "../../../assets/evyonn.jpeg";
function Leaders() {
  return (
    <div>
      <div className="leadershipContainer">
        <Title titleName={"mut tech club leaders"} />
        <div className="membersContainer">
          <Member
            picture={ndiaImg}
            linkedInUrl="linkedin.com"
            twitterUrl="twitter.com"
            fbUrl="facebook.com"
            IgUrl="instagram.com"
            fullname="Dr. john ndia"
            roles="patron"
            biographies=" lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
          <Member
            picture={victorineImg}
            linkedInUrl="linkedin.com"
            twitterUrl="twitter.com"
            fbUrl="facebook.com"
            IgUrl="instagram.com"
            fullname="victory njeru"
            roles="chairperson"
            biographies=" lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
          <Member
            picture={allanImg}
            linkedInUrl="linkedin.com"
            twitterUrl="twitter.com"
            fbUrl="facebook.com"
            IgUrl="instagram.com"
            fullname="allan muhari"
            roles="vice chairperson"
            biographies=" lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
          <Member
            picture={bridgetImg}
            linkedInUrl="linkedin.com"
            twitterUrl="twitter.com"
            fbUrl="facebook.com"
            IgUrl="instagram.com"
            fullname="bridget gitonga"
            roles="secretary"
            biographies=" lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
          <Member
            picture={ruthImg}
            linkedInUrl="linkedin.com"
            twitterUrl="twitter.com"
            fbUrl="facebook.com"
            IgUrl="instagram.com"
            fullname="ruth mutisya"
            roles="treasurer"
            biographies=" lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
          <Member
            picture={websterImg}
            linkedInUrl="linkedin.com"
            twitterUrl="twitter.com"
            fbUrl="facebook.com"
            IgUrl="instagram.com"
            fullname="webster ifedha"
            roles="cyber security lead"
            biographies=" lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
          <Member
            picture={manaseImg}
            linkedInUrl="linkedin.com"
            twitterUrl="twitter.com"
            fbUrl="facebook.com"
            IgUrl="instagram.com"
            fullname="manase gunga"
            roles="ui/ux lead"
            biographies=" lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
          <Member
            picture={shiroImg}
            linkedInUrl="linkedin.com"
            twitterUrl="twitter.com"
            fbUrl="facebook.com"
            IgUrl="instagram.com"
            fullname="carolyne githenduka"
            roles="web-development lead"
            biographies=" lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
          <Member
            picture={stanleyImg}
            linkedInUrl="linkedin.com"
            twitterUrl="twitter.com"
            fbUrl="facebook.com"
            IgUrl="instagram.com"
            fullname="stanley amunze"
            roles="mobile application lead"
            biographies=" lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
          <Member
            picture={paulImg}
            linkedInUrl="linkedin.com"
            twitterUrl="twitter.com"
            fbUrl="facebook.com"
            IgUrl="instagram.com"
            fullname="paul karanja"
            roles="cloud engineering lead"
            biographies=" lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
          <Member
            picture={evyonnImg}
            linkedInUrl="linkedin.com"
            twitterUrl="twitter.com"
            fbUrl="facebook.com"
            IgUrl="instagram.com"
            fullname="evyonn mbithe"
            roles="power platform lead"
            biographies=" lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
          />
        </div>
      </div>
    </div>
  );
}

export default Leaders;
