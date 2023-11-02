import { RECEIVE_TWEETS } from "../actions/tweets";

export default function tweets(state = {}, action) {
  console.log(`inside tweets reducer`);
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      };
    default:
      return state;
  }
}
