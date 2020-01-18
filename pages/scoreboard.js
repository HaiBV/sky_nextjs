import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Nav from '../components/nav';
import Player from '../components/Player/Player';
import { loadData } from '../actions';
import '../scss/scoreboard.scss';

const Scoreboard = ({ isServer }) => {
  // get state value by useSelector
  const players = useSelector(state => state.players);
  console.log(isServer);
  const placeholderData = useSelector(state => state.placeholderData);
  console.log(placeholderData);
  return (
    <Container>
      <Nav />
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
  players: PropTypes.array
};

Scoreboard.getInitialProps = props => {
  console.log('run server');
  const { store, isServer } = props.ctx;
  console.log(store.getState().placeholderData);
  store.dispatch(loadData());
  return { isServer };
};

export default Scoreboard;
