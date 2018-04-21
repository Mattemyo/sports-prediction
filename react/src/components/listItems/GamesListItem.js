import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GamesListItem extends Component {
  state = {
    selected: false
  };

  onMouseEnter = () => {
    this.setState({ selected: true });
  };
  onMouseLeave = () => {
    this.setState({ selected: false });
  };

  render() {
    const {
      onMouseEnter,
      onMouseLeave,
      props: {
        game: {
          status,
          homeTeamName,
          awayTeamName,
          date,
          result: { goalsHomeTeam, goalsAwayTeam },
          _links: {
            self: { href }
          }
        }
      },
      state: { selected }
    } = this;
    const gameId = href.substr(href.lastIndexOf('/') + 1);
    const formattedDate = date;

    return (
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="listed-game"
      >
        <div
          style={{
            transform: `scaleX(${selected} ? '1' : '0')`,
            flex: selected ? 1 : 0,
            transition: 'all 0.2s ease-out'
          }}
          className="selector"
        />
        <div className="game-link">
          <Link to={`/livegame/${gameId}`}>
            <span>
              {homeTeamName}{' '}
              <span>
                {goalsHomeTeam} - {goalsAwayTeam}
              </span>{' '}
              {awayTeamName}
              <span>
                {'  '}
                {status === 'IN_PLAY'
                  ? status
                  : status === 'FINISHED' && status}
              </span>
            </span>
          </Link>
          <hr />
        </div>
      </div>
    );
  }
}
