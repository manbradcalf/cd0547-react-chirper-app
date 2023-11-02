import React, { useEffect } from "react";
import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
const Tweet = ({ tweet }) => {
  console.log(tweet);
  return (
    <div>
      <div className="tweet">
        <p>{tweet.text}</p>
      <img className="avatar" src={tweet.avatar} />
      <div className="tweet-info">
        <p>{tweet.name}</p>
        <p>likes:{tweet.likes}</p>
        <p>{formatDate(tweet.timestamp)}</p>
      </div>
      </div>
    </div>
  );
};

export default Tweet;
// const mapStateToProps = ({ tweets }) => ({
//   text: tweets[tweetId].text,
//   author: tweets[tweetId].author,
// });

// export default connect(mapStateToProps)(Tweet);
