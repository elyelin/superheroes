import React from 'react';
import { useSuperHeroesContext } from '../context/SuperHeroesContext';

const TeamStats = () => {
  const { stats } = useSuperHeroesContext();
  if (!stats) {
    return (
      <div className="card p-4">
        When you add heroes to your team you will be able to see the stats of
        your team here.
      </div>
    );
  }
  return (
    <div className="card px-3 py-2">
      <h3>Team: {stats.teamBestStat?.stat}</h3>
      <h4>Total: {stats.totalPowerstats}</h4>

      <div className="mt-3">
        <h5>Powerstats: </h5>
        {stats.powerstats?.map(({ stat, power }) => {
          return (
            <div>
              <strong className="text-capitalize">{stat}:</strong> {power}
            </div>
          );
        })}
      </div>

      <div className="mt-4">
        <div>
          <strong>Average Height:</strong> {stats.heightAvg} cm
        </div>
        <div>
          <strong>Average Weight:</strong> {stats.weightAvg} lb
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
