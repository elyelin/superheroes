import React, { useState } from 'react';
import { searchSuperheroes } from '../services/superheroService';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);

  function search() {
    setError(null);
    searchSuperheroes(query).then((response) => {
      if (response.response === 'success') {
        setHeroes(response.results);
        debugger;
      } else {
        setHeroes([]);
        setError(response.error);
      }
    });
  }

  return (
    <>
      {/* Form */}
      <div className="row">
        <div className="d-flex">
          <input
            className="form-control "
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button className="btn btn-primary" onClick={search}>
            {' '}
            Buscar
          </button>
        </div>
      </div>

      {/* Resultado de busqueda */}
      <div className="row mt-4">
        {error && <div className="alert alert-danger">{error}</div>}

        {heroes.map((hero) => {
          return (
            <div className="col-3">
              <div className="card">
                <img
                  className="card-img-top hero-image"
                  src={hero.image.url}
                  alt={hero.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{hero.name}</h5>
                  <div className="d-flex justify-content-between">
                    {hero.biography.alignment === 'good' ? '😇' : '😈'}
                    <button className="btn btn-primary">Add</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePage;
