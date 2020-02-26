const getWantlist = username => {
  
  //return fetch(`https://cors-anywhere.herokuapp.com/http://our-vinyl-project-staging.herokuapp.com/api/v1/items/${username}`)
  return fetch(`https://our-vinyl-project-staging.herokuapp.com/api/v1/items/${username}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return data;
    });
};

export default getWantlist;
