import httpClient from '../utils/httpClient';

export function searchSuperheroes(name) {
  return httpClient
    .get(`/search/${name}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function getHeroById(id) {
  return httpClient
    .get(`/${id}`)
    .then((res) => {
      return res.data;
    })

    .catch((error) => {
      throw error;
    });
}
