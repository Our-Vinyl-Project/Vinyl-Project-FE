import React from 'react';
import PropTypes from 'prop-types';

export const Developer = ({ name, linkedin, github, image }) => {
  return (
    <li key={name}>
      <img src={image}/>
      <p>{name}</p>
      <section>
        <a href={linkedin}><img src="../../assets/github.png"/></a>
        <a href={github}><img src="../../assets/linkedin.png"/></a>
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
