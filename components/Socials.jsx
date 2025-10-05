import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ROYBRUNO81" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/bruno-ndiba-mbwaye-roy-80b991258/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/mbwayeroy_81",
  },
  { icon: <FaTwitter />, path: "https://twitter.com/your-username" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;

