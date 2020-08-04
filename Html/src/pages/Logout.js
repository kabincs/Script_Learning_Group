import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ls from 'local-storage';

class Logout extends Component {
  render() {
    ls.remove('token');
    ls.clear();
    return (
      <>
        <Redirect to="/login" />
      </>
    );
  }
}

export default Logout;
