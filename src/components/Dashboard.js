import { connect } from "react-redux";
import Tweet from "./Tweet";
import { formatTweet } from "../utils/helpers";

const Dashboard = ({ tweets }) => {
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {tweets.map((tweet) => {
          return (
            <li key={tweet.id}>
              <Tweet tweet={tweet} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// called when the store is updated
// because we connected it via connect(mapStateToProps)(Dashboard)
const mapStateToProps = ({ tweets, users, authedUser }) => ({
  tweets: Object.values(tweets).sort((a, b) => b.timestamp - a.timestamp)
  .map((t) =>
    formatTweet(
      t,
      users[t.author],
      authedUser,
      t.parentTweet ? t.parentTweet : null
    )
  ),
});

// This connect invocation sends the tweetsReducer to mapStateToProps
// which then reduces the tweets to an object that is passed to Dashboard as
// props
export default connect(mapStateToProps)(Dashboard);
