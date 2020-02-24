// this was just to test component flow


import React, { useState, useEffect } from 'react';
import getWantlist from '../services/getWantlist';

function Wantlist() {
  const [wants, setWants] = useState([]);
  useEffect(() => {
    getWantlist('okFox').then(setWants);
  }, []);
  const list = wants.map((wants, i) => {
    return (
      <li key={i}>
        {wants.id}
      </li>
    );
  }

  );

  return (
    <ul>
      {list}
    </ul>
  );
}
export default Wantlist;
