import React, { Component } from 'react';

class Resources extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const userId = localStorage.getItem('auth0:id_token:sub');
    if (isAuthenticated()) {
      return (
        <div className="App">
          <h1 className="center">
            {' '}
            Resources Page: Check out the resources below
          </h1>
          <ul>
            <li className="Link">
              Cleaning A Record Needle
              <a
                style={{ color: 'black' }}
                href="https://fireinsidemusic.com/how-to-clean-a-record-needle/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://fireinsidemusic.com/how-to-clean-a-record-needle/
              </a>
            </li>
            <li className="Link">
              Finding a Wireless Record Player
              <a
                style={{ color: 'black' }}
                href="https://www.ikream.com/2019/09/9-best-wireless-turntables-can-connect-via-bluetooth-2019-27038"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://www.ikream.com/2019/09/9-best-wireless-turntables-can-connect-via-bluetooth-2019-27038
              </a>
            </li>
            <li className="Link">
              A List of best sounding records
              <a
                style={{ color: 'black' }}
                href="https://www.cnet.com/pictures/best-sounding-albums-to-own-on-vinyl/15/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <br />
                https://www.cnet.com/pictures/best-sounding-albums-to-own-on-vinyl/15/
              </a>
            </li>
          </ul>
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

export default Resources;
