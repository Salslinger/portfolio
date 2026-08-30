import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialSection = () => {
  return (
    <section className='flex justify-center space-x-6 p-6 bg-gray-100'>
      <a href='https://discord.com' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faDiscord} size='2x' />
      </a>
      <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faInstagram} size='2x' />
      </a>
      <a href='https://github.com' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faGithub} size='2x' />
      </a>
      <a href='https://mavengage.com' target='_blank' rel='noopener noreferrer'>
        <img
          src={"/website/assets/MavEngage.png"}
          alt='MavEngage Logo'
          className='h-8 w-8'
        />
      </a>
      <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faYoutube} size='2x' />
      </a>
    </section>
  );
};

export default SocialSection;
