import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Player from '../components/Player/Player';

const Scoreboard = () => {
  const players = useSelector(state => state.players);
  return (
    <div className='scoreboard'>
      <Container fluid>
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
      </Container>
    </div>
  );
};

Scoreboard.propTypes = {
  title: PropTypes.string,
  players: PropTypes.array
};

Scoreboard.getInitialProps = props => {
  const { store, isServer } = props.ctx;
  return { isServer };
};

export default connect()(Scoreboard);
