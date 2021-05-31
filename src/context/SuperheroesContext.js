import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const SuperHeroesContext = React.createContext({});

export function SuperHeroesContextProvider({ children }) {
  let initialHeroes = [];
  try {
    initialHeroes = JSON.parse(localStorage.getItem('heroes'));
  } catch (e) {}

  const [heroes, setHeroes] = useState(initialHeroes || []);
  const [stats, setStats] = useState({});

  function addHero(hero) {
    const alignment = hero.biography.alignment;

    if (alignment !== 'good' && alignment !== 'bad') {
      toast.error(
        `Since the last war ${hero.name} does not take part in extremist bands.`
      );

      return;
    }

    const alignmentHeroes = heroes.filter(
      (h) => h.biography.alignment === alignment
    );
    if (alignmentHeroes.length < 3) {
      const exists = heroes.find((h) => h.id === hero.id);
      if (exists) {
        toast.error(
          `${hero.name} is an excellent choice, but you can't add them twice.`
        );

        return;
      }

      setHeroes([...heroes, hero]);
      toast.success(`${hero.name} was added!`);
    } else {
      toast.error(`Sorry, the ${hero.biography.alignment} team is full.`);
    }
  }

  function removeHero(id) {
    const filteredHeroes = heroes.filter((h) => h.id !== id);
    setHeroes(filteredHeroes);
  }

  useEffect(() => {
    // Save heroes in localStorage

    localStorage.setItem('heroes', JSON.stringify(heroes));

    // Stats
    if (!heroes || heroes.length === 0) {
      setStats(null);
      return;
    }
    let totalPowerstats = 0;
    const tempStats = heroes.reduce((prev, currentHero) => {
      const { powerstats } = currentHero;
      for (let ps of Object.keys(powerstats)) {
        const power = parseInt(powerstats[ps], 10);
        totalPowerstats += power;
        if (!prev[ps]) {
          prev[ps] = power;
        } else {
          prev[ps] += power;
        }
      }

      return prev;
    }, {});

    const statsArray = Object.keys(tempStats).map((stat) => {
      return {
        stat,
        power: tempStats[stat],
      };
    });

    const sortedArray = statsArray.sort((a, b) => b.power - a.power);
    const teamBestStat = sortedArray[0];

    // Weight & Height
    let totalHeight = 0;
    let totalWeight = 0;

    heroes.forEach((hero) => {
      const { weight, height } = hero.appearance;
      const intWeight = parseInt(weight[0], 10);
      totalWeight += intWeight;

      const intHeight = parseInt(height[1], 10);
      totalHeight += intHeight;
    });

    const heightAvg = totalHeight / heroes.length;
    const weightAvg = totalWeight / heroes.length;

    setStats({
      powerstats: statsArray,
      totalPowerstats,
      teamBestStat,
      heightAvg: heightAvg.toFixed(2),
      weightAvg: weightAvg.toFixed(2),
    });
  }, [heroes]);

  const value = {
    heroes,
    addHero,
    removeHero,
    stats,
  };

  return (
    <SuperHeroesContext.Provider value={value}>
      {children}
    </SuperHeroesContext.Provider>
  );
}

export function useSuperHeroesContext() {
  const context = useContext(SuperHeroesContext);

  return context;
}
