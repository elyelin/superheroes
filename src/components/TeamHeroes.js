import React from 'react';
import { useSuperHeroesContext } from '../context/SuperHeroesContext';
import HeroCard from './HeroCard';

const TeamHeroes = () => {
  const { heroes, removeHero } = useSuperHeroesContext();

  if (!heroes || heroes.length === 0) {
    return (
      <div className="alert alert-danger">
        There are no heroes in your team, please search and add heroes.
      </div>
    );
  }

  return (
    <div className="row ">
      {heroes.map((hero) => {
        return (
          <HeroCard
            key={hero.id}
            className="col-4"
            hero={hero}
            onClick={() => {
              removeHero(hero.id);
            }}
            mode="delete"
            showPowerstats
          />
        );
      })}
    </div>
  );
};

export default TeamHeroes;
