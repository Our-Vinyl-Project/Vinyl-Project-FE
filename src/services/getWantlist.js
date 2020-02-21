
//this is just for front end testing

const getWantlist = username => {
  
  return fetch(`https://api.discogs.com/users/${username}/wants`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return data.wants.map(wants => ({
        id: wants.id,
        title: wants.title,
        url: wants.resource_url

      }));
    });
};

export default getWantlist;



