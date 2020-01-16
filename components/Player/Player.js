import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';

const Player = ({ index, name, score }) => {
  return (
    <Row>
      <Col md={8} className='player-name'>
        <Button className='remove-player'>X</Button>
        <div className='select-player'>{name}</div>
      </Col>
      <Col md={4} className='player-score'>
        {/* <Counter index={this.props.index} score={this.props.score} /> */}
      </Col>
    </Row>
  );
};

Player.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

export default Player;
