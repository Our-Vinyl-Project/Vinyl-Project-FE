const getWantlist = username => {
  return fetch(`https://our-vinyl-project-production.herokuapp.com/api/v1/items/${username}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return data;
    });
};

export default getWantlist;
