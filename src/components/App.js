const App = () => {
  return <div>Starter Code</div>;
};

/**
 * Remember how normal Action Creators return actions - simple Javascript objects that then go to all of our reducers?
 * Making an API request is an asynchronous action, so we cannot just send a plain Javascript object to our reducers.
 * Redux middleware can gain access to an action when it's on its way to the reducers.
 * We'll be using the redux-thunk middleware in this example.
 *
 * If the Redux Thunk middleware is enabled (which is done via the applyMiddleware() function),
 * then any time your action creator returns a function instead of a Javascript object, it will go to the redux-thunk middleware.
 *
 * Dan Abramov describes what happens next:
 *
 * The middleware will call that function with dispatch method itself as the first argument...
 * The action will only reach the reducers once the API request is completed.
 * It will also “swallow” such actions so don't worry about your reducers receiving weird function arguments.
 * Your reducers will only receive plain object actions—either emitted directly, or emitted by the functions as we just described.
 */

// Thunk action creator
function handleInitialData() {
  return (dispatch) => {};
}

export default App;
