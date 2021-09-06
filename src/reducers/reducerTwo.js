import { SUM_COUNTER } from "../actions";

const INITIAL_STATE = {
  counter: 0,
};

const reducerTwo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUM_COUNTER:
      return { ...state, counter: state.counter + 1 };

    default:
      return state;
  }
}

export default reducerTwo;
