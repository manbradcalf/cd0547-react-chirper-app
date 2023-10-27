export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export function receiveTweets(tweets) {
  console.log(`inside receiveTweets action`)
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}
