import React from 'react';
import PropTypes from 'prop-types';
import './AboutUs.css';

export const Developer = ({ name, linkedin, github, image }) => {
  return (
    <li key={name}>
      <img src={image}/>
      <p>{name}</p>
      <section>
        <a href={linkedin}>GitHub</a>
        <a href={github}>LinkedIn</a>
      </section>
    </li>
  );
};

Developer.propTypes = {
  name: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
