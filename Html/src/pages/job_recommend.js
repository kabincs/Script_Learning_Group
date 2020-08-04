import React, { useState, useEffect, Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import JobBoardComponent from '../components/jobComponent';
import Footer from '../components/footer_rec';
import NavBar from '../components/NavBar';
import axios from 'axios';
import Header from '../components/header_rec';

class job_recommend extends Component {
  constructor(props){
    super(props);
  this.state ={
    jobs: [],
    isLoaded: false
  };
}
componentDidMount(){
	axios.get('https://e6db94b9-46f0-4769-a963-5786598f5d16.mock.pstmn.io//job/recommend')
    .then(res => {
      const jobs = res.data;
      this.setState({ jobs });
    })
}

render() {
  var { isLoaded, jobs } = this.state;
  return(
    <div className="App" >
	<Header />
    <h2 className="text-2xl font-bold text-blue-800">Welcome to GTS Chakuri Platform</h2>
    <p>A platform for Job Seekers, Trainers & Employers</p>
    <h3 className="text-2xl font-bold " style={style1} >Job Recommended</h3>
        <div>
          {jobs.map(job =>(
            <JobBoardComponent job={job} key={job.id} />
          )
            )}
        </div>
        <Footer />
    </div>

  )
}

}
const style1 ={
    marginRight : '80%'
  }


export default job_recommend;