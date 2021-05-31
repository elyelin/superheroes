import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getHeroById } from '../services/superheroService';

const SuperheroPage = () => {
  let { id } = useParams();
  const [hero, setHero] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getHeroById(id)
      .then((data) => {
        setHero(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return 'Loading...';
  }

  return (
    <div className="card">
      <div className="card ">
        <img
          className="rounded mx-auto d-block"
          src={hero.image.url}
          alt={hero.name}
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{hero.name}</h2>
        <h4>weight: {hero.appearance.weight}</h4>
        <h4>Height: {hero.appearance.height}</h4>
        <h4>Full name: {hero.biography['full-name']}</h4>
        <h4>Aliases: {hero.biography.aliases}</h4>
        <h4>Eyes color: {hero.appearance['eye-color']}</h4>
        <h4>Heir color: {hero.appearance['hair-color']}</h4>
        <h4>Workplace: {hero.work.base}</h4>
      </div>
    </div>
  );
};

export default SuperheroPage;
