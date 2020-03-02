const getChartData = releaseId => {
  return fetch(`https://our-vinyl-project-production.herokuapp.com/api/v1/chart/${releaseId}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, data]) => {
      if(!ok){
        throw data;
      }
      return data;
    });
};

export default getChartData;

