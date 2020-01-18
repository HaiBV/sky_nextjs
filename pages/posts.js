import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../components/nav';
import { loadPosts } from '../actions';

const Posts = ({ isServer, posts }) => {
  console.log(isServer);
  console.log(posts);
  return (
    <div>
      <Nav />
      <p>This is posts page</p>
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array
};

Posts.getInitialProps = props => {
  console.log('run server');
  const { store, isServer } = props.ctx;
  // get state value by store.getState()
  store.dispatch(loadPosts());
  // with this way, component will not re-render after finish dispatch
  return { isServer, ...{ posts: store.getState().posts } };
};

export default Posts;
