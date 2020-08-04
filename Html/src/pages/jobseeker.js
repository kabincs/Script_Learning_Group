import React, { useState, useEffect, Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import JobBoardComponent from '../components/JobBoardComponent';
import Footer1 from '../components/Footer1';
import Header from '../components/foot_job';

class jobseeker extends Component {
  constructor(props){
    super(props);
  this.state ={
    jobs: [],
    isLoaded: false
  };
}
componentDidMount(){
  fetch('https://882ea7a9-3379-4a5a-bf76-5cfa98cb15ac.mock.pstmn.io//GTS/job')
  .then(res => res.json())
  .then(json => {
    this.setState({
      isLoaded: true,
      jobs: json
    })
  });
}

render() {
  var { isLoaded, jobs } = this.state;
  return(
    <div className="App" style={{backgroundColor: "#ffb6c1"}}>
      <Header />
      <br />
    <h2 className="text-2xl font-bold text-blue-800">Welcome to GTS Chakuri Platform</h2>
    <p>A platform for Job Seekers, Trainers & Employers</p>
        <div>
          {jobs.map(job =>(
            <JobBoardComponent job={job} key={job.id} />
          )
            )}
        </div>
        <Footer1 />
    </div>

  )
}

}


export default jobseeker;
