import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Player from '../components/Player/Player';
import '../scss/scoreboard.scss';

const Scoreboard = ({ isServer }) => {
  const players = useSelector(state => state.players);
  console.log(isServer);
  return (
    <Container>
      <div className='scoreboard'>
        <div className='players'>
          {players.map((player, index) => (
            <Player
              index={index}
              name={player.name}
              score={player.score}
              key={player.name}
              // updatePlayerScore={updatePlayerScore}
              // selectPlayer={selectPlayer}
              // removePlayer={removePlayer}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

Scoreboard.propTypes = {
  title: PropTypes.string,
  players: PropTypes.array.isRequired
};

Scoreboard.getInitialProps = props => {
  const { isServer } = props.ctx;
  return { isServer };
};

export default Scoreboard;
