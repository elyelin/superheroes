import React, { useState } from 'react';
import HeroCard from '../components/HeroCard';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import { useSuperHeroesContext } from '../context/SuperHeroesContext';
import { searchSuperheroes } from '../services/superheroService';

const SearchPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState();
  const { addHero } = useSuperHeroesContext();

  function search(values, { setSubmitting }) {
    setError(null);
    setLoading(true);
    searchSuperheroes(values.name).then((response) => {
      if (response.response === 'success') {
        setHeroes(response.results);
      } else {
        setHeroes([]);
        setError(response.error);
      }
      setSubmitting(false);
      setLoading(false);
    });
  }

  return (
    <>
      <SearchBar onSubmit={search} />

      <div className="row mt-4">
        {error && <div className="alert alert-danger">{error}</div>}

        {loading && <Loading />}

        {!loading &&
          heroes.map((hero) => {
            return <HeroCard key={hero} hero={hero} onClick={addHero} />;
          })}
      </div>
    </>
  );
};

export default SearchPage;
