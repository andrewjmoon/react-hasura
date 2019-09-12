import React from 'react';
import RecordList from './RecordList';
import RecordInput from './RecordInput';

class CombinedRecords extends React.Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const userId = localStorage.getItem('auth0:id_token:sub');
    if (isAuthenticated()) {
      return (
        <div className="parentContainer">
          <h1 className="center"> My Record Collection</h1>
          <RecordInput userId={userId} />
          <RecordList />
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

export default CombinedRecords;

// <RecordInput userId={userId} />
