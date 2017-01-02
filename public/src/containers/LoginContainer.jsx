import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/AuthActions';

class LoginContainer extends React.Component {
  static displayName = 'LoginContainer';

  static propTypes = {
    currentUser: React.PropTypes.string,
    login: React.PropTypes.func,
  };

  state = {};

  handleLogin = () => {
    const payload = { username: 'donkeyue' };

    return this.props.login(payload);
  }

  render() {
    const props = {};

    return (
      <div>
        <input type="text" />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { auth } = state;
  return {
    currentUser: auth.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(AuthActions.login, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
