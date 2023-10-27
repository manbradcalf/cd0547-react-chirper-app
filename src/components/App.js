import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return <div>Starter Code</div>;
};
// connect() connects the (App) to the store
export default connect()(App);
