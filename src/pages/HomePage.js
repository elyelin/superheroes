import React from 'react';
import TeamHeroes from '../components/TeamHeroes';
import TeamStats from '../components/TeamStats';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <TeamHeroes />
        </div>

        <div className="col-4">
          <TeamStats />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
