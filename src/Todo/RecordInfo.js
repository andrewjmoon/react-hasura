import React, { Component } from 'react';
import Tabletop from 'tabletop';

class RecordInfo extends Component {
  state = {
    data: []
  };

  login() {
    this.props.auth.login();
  }

  componentDidMount() {
    Tabletop.init({
      key: '1FTPfb5gUzKDI0olrTeOpBmsoLl4vc4g6xMHme3IoAgQ',
      callback: googleData => {
        console.log('google sheet data --->', googleData);
        this.setState({
          data: googleData.RecordCollection.elements
        });
      },
      simpleSheet: false
    });
  }

  render() {
    const { data } = this.state;
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated()) {
      return (
        <div className="center">
          <div>
            <h2>AM's Record Collection</h2>

            {data.map(a => {
              return (
                <div key={a.Id}>
                  <p>Band: {a.Band}</p>
                  <p>Album: {a.Album}</p>
                  <a
                    className="Link"
                    href={a.Info}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    Record Info
                  </a>
                  <hr />
                </div>
              );
            })}
          </div>
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

export default RecordInfo;
