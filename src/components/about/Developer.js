import React from 'react';
import PropTypes from 'prop-types';
import styles from './AboutUs.css';

export const Developer = ({ name, linkedin, github, image }) => {
  return (
    <li className={styles.devItem} key={name}>
      <img  className={styles.devImg}src={image}/>
      <p>{name}</p>
      <section>
        <a className={styles.devLinkGH} href={linkedin}>GitHub</a>・
        <a className={styles.devLinkLI} href={github}>LinkedIn</a>
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
