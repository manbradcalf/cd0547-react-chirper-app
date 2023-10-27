import { getInitialData } from "../utils/api";
import { receiveUsers } from "users";
import { receiveTweets } from "tweets";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

// asynchronous action creator for middleware
// to be passed to useEffect in App.js?
export function handleInitialData() {
  return (dispatch) => {
    // call to api
    return getInitialData().then(({ users, tweets }) => {
      // create and dispatch action when api responds
      dispatch(receiveTweets(tweets));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
