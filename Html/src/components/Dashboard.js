import React from 'react';

// core components
import NavBar from './NavBar';
import Footer1 from './Footer1';
import GlobalHomePage from './GlobalHomePage.js';
// import routes from 'routes.js';

class Dashboard extends React.Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }

  render() {
    return (
      <>
        


        <GlobalHomePage></GlobalHomePage>


        
      </>
    );
    // } else {
    //   return <Redirect to="/login" exact></Redirect>;
    // }
  }
}

export default Dashboard;
