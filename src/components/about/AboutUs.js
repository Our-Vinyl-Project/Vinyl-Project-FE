import React from 'react';
import { Developer } from './Developer';
import developerArray from './developers';
import styles from './AboutUs.css';

export const AboutUs = () => {
  const developerElements = developerArray.map((dev) => {
    return <Developer key={dev.name} {...dev} />;
  });

  return (
    <section className={styles.aboutPage}>
      <h2 className={styles.aboutHeader}>About Vinyl RESTing Place</h2>
      <br/>
      <p className={styles.aboutPar}>Vinyl RESTing Place allows users to find personalized deals on the 53 million items for sale in the Marketplace at Discogs.com.
Users maintain their list of releases they want to purchase using the integrated Wantlist tool on Discogs.com.
      <br/><br/>
When a user enters their Discogs username into VRP, their Discogs Wantlist is retrieved and the Discogs Marketplace is searched for items for sale. The results of this search are then compared against the suggested prices for each item, and the best deal for each item is displayed. With filter options, the user is further able to customize the results.</p>
      <br/>

      <h2 className={styles.aboutHeader}>About The Developers</h2>
      
      <ul className={styles.devList}>
        {developerElements}
      </ul>
    </section>
  );
};
