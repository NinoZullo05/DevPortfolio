import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaButtons = () => {
  const socialLinks = [
    {
      icon: FaEnvelope,
      href: "mailto:nino.zullo05dev@gmail.com",
      label: "Email",
    },
    { icon: FaGithub, href: "https://github.com/NinoZullo05", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/nino-zullo-a929992b1/",
      label: "LinkedIn",
    },
  ];
x
  return (
    <div className="flex justify-center space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-light-text dark:text-dark-text hover:text-light-purple dark:hover:text-dark-purple transition duration-300"
          aria-label={label}
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaButtons;
