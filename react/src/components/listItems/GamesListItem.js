import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'material-ui/Icon';

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
        idx,
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
        style={{ animationDelay: `${idx * 0.05}s` }}
      >
        <div
          style={{
            flex: selected ? 1 : 0
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
              {status === 'IN_PLAY' && (
                <i
                  style={{
                    borderRadius: '1000px',
                    background: 'green',
                    marginLeft: '16px'
                  }}
                  className="far fa-futbol"
                />
              )}
              {status === 'FINISHED' && (
                <i
                  style={{
                    marginLeft: '16px'
                  }}
                  className="fas fa-flag-checkered"
                />
              )}
            </span>
          </Link>
          <hr />
        </div>
      </div>
    );
  }
}
