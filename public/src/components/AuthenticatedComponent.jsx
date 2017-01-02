import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

export default function requireAuthentication(Component) {
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      currentUser: React.PropTypes.string,
    };

    componentWillMount() {
      if (!localStorage.getItem('currentUser')) {
        hashHistory.push('/');
      }
    }

    render() {
      return (localStorage.getItem('currentUser') ? <Component /> : null);
    }
  }

  const mapStateToProps = (state) => {
    const { auth } = state;

    return { currentUser: auth.currentUser };
  };

  return connect(mapStateToProps, null)(AuthenticatedComponent);
}
