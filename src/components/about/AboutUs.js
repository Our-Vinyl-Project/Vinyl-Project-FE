import React from 'react';

export const AboutUs = () => {
  const developerElements = developerArray.map((dev) => {
    return <Developer key={dev.name} {...dev} />;
  });

  return (
    <section>
      <h2>About Vinyl RESTing Place</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      <h2>About The Developers</h2>
      <ul>
        {developerElements}
      </ul>
    </section>
  );
};
