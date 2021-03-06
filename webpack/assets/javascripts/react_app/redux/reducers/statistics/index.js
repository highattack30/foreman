import {
  STATISTICS_DATA_REQUEST,
  STATISTICS_DATA_SUCCESS,
  STATISTICS_DATA_FAILURE
} from '../../consts';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  charts: Immutable({})
});

export default (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case STATISTICS_DATA_REQUEST:
      return state.setIn(['charts', payload.id], payload);
    case STATISTICS_DATA_SUCCESS:
      return state.setIn(
        ['charts', payload.id],
        { ...state.charts[payload.id], data: payload.data }
      );
    case STATISTICS_DATA_FAILURE:
      return state.setIn(
        ['charts', payload.id],
        { ...state.charts[payload.id], error: payload.error }
      );
    default: return state;
  }
};
