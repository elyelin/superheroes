import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({
  hero,
  onClick,
  className = 'col-3',
  mode = 'add',
  showPowerstats = false,
}) => {
  function renderAlignmentEmoji() {
    const { alignment } = hero.biography;
    if (alignment === 'good') {
      return '😇';
    }

    if (alignment === 'bad') {
      return '😈';
    }

    if (alignment === 'neutral') {
      return '☮️';
    }

    return alignment;
  }

  function renderActions() {
    if (mode === 'add') {
      return (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            onClick(hero);
          }}
        >
          Add
        </button>
      );
    }

    if (mode === 'delete') {
      return (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            onClick(hero);
          }}
        >
          Delete
        </button>
      );
    }
  }

  function renderPowerStats() {
    if (!showPowerstats) {
      return null;
    }

    const { powerstats } = hero;
    return (
      <div className="mt-4">
        <h5>Powerstats: </h5>
        {Object.keys(powerstats).map((stat) => {
          return (
            <div>
              <strong className="text-capitalize">{stat}:</strong>{' '}
              {powerstats[stat]}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`${className} mb-4`}>
      <div className="card">
        <img
          className="card-img-top hero-image"
          src={hero.image.url}
          alt={hero.name}
          loading="lazy"
        />

        <div className="card-body">
          <h5 className="card-title">
            {hero.name} {renderAlignmentEmoji()}
          </h5>

          {renderPowerStats()}

          <div className="d-flex justify-content-between mt-4">
            <Link
              to={`/superhero/${hero.id}`}
              className="btn btn-success btn-sm"
            >
              View Details
            </Link>
            {renderActions()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
