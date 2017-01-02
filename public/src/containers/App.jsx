import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class App extends React.Component {
  static displayName = 'App';

  static propTypes = {};

  state = {};

  render() {
    const props = {};

    return (
      <div>Hello from App</div>
    );
  }
}

function mapStateToProps(state) {
  const { example } = state;
  return {
    // example: example.examples,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // example: bindActionCreators(ExampleActions.exampleFunction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
