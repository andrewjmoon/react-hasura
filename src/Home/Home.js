import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated()) {
      return (
        <div>
          <Link className="center" to="/home">
            Home
          </Link>
          <br />
          <Link className="center" to="/records">
            Records List
          </Link>
          <br />
          <Link className="center" to="/combinedrecords">
            Record Input and List
          </Link>
          <br />
          <Link className="center" to="/amrecordcollection">
            AM's Record Collection List
          </Link>
          <br />
        </div>
      );
    }
    return (
      <div className="container">
        <h4>
          You are not logged in! Please{' '}
          <a style={{ cursor: 'pointer' }} onClick={this.login.bind(this)}>
            Log In
          </a>{' '}
          to continue.
        </h4>
      </div>
    );
  }
}

export default Home;
