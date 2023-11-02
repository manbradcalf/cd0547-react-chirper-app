import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

const App = ({ dispatch, loading }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return <div>{loading === true ? <h1>Loading!</h1> : <Dashboard />}</div>;
};

/**
 * mapStateToProps - If this argument is specified, the new component will subscribe to Redux store updates.
 * This means that any time the store is updated, mapStateToProps will be called.
 * The results of mapStateToProps must be a plain object, which will be merged into the component’s props.
 * If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.
 *
 * Note that {authedUser} is destructured from the entire state which is passed
 * to mapStateToProps
 */
const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

// Using the connect() function upgrades a component to a container.
export default connect(mapStateToProps)(App);
