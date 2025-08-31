import React from "react";
import SVGIcon from "../components/SVGIcon";
import socialIconsStyles from "../styles/SocialIcons.module.scss";

const SocialIcons = () => {
  const links = [
    {
      icon: "linkedIn",
      link: "https://www.linkedin.com/in/jacob-broughton-637189164/",
    },
    {
      icon: "github",
      link: "https://www.github.com/jacobbroughton",
    },
    {
      icon: "leetcode",
      link: "https://leetcode.com/jlbroughton/",
    },
    {
      icon: "youtube",
      link: "https://www.youtube.com/channel/UCnHjcw_ZQwEQAUbXPbUecWA",
    },
  ];

  return (
    <div className={socialIconsStyles.socialIcons}>
      {links.map((link) => (
        <a key={link.icon} className={socialIconsStyles.socialLink} href={link.link}>
          <SVGIcon type={link.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
