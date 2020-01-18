import { actionTypes } from './actions';

export const exampleInitialState = {
  players: [
    {
      id: 1,
      name: 'Captain America',
      score: 42,
      created: '5/1/2018',
      updated: '5/14/2018'
    },
    {
      id: 2,
      name: 'Iron man',
      score: 36,
      created: '4/1/2018',
      updated: '4/14/2018'
    },
    {
      id: 3,
      name: 'Spidey',
      score: 17,
      created: '3/1/2018',
      updated: '3/14/2018'
    },
    {
      id: 4,
      name: 'Captain Marvel',
      score: 28,
      created: '2/1/2018',
      updated: '2/14/2018'
    },
    {
      id: 5,
      name: 'Hulk',
      score: 29,
      created: '1/1/2018',
      updated: '1/14/2018'
    }
  ],
  selectedPlayerIndex: -1,
  placeholderData: null,
  posts: null
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 }
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 }
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count }
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data }
      };

    case actionTypes.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        ...{ posts: action.posts }
      };

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light }
      };

    default:
      return state;
  }
}

export default reducer;
