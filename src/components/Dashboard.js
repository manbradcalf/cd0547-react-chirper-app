import { connect } from "react-redux";

const Dashboard = (props) => {
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {props.tweetIds.map((id) => {
          return <li key={id}>
            <div>TWEET ID: {id}</div>
          </li>;
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tweets }) => ({
  tweetIds: Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp
  ),
});

// This connect invocation sends the tweetsReducer to mapStateToProps
// which then reduces the tweets to an object that is passed to Dashboard as
// props
export default connect(mapStateToProps)(Dashboard);
