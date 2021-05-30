import axios from 'axios';

export function signIn(data) {
  return axios
    .post('http://challenge-react.alkemy.org/', data)
    .then((res) => {
      return res.data;
    })

    .catch((error) => {
      throw error;
    });
}
