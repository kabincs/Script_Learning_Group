import React, { Component } from 'react';
 import {FormGroup, Form, Row,NavLink,NavItem, Col, ButtonGroup} from 'reactstrap';
 import { FormControl,FormLabel, Button} from 'react-bootstrap';
 //import ls from 'local-storage';
 import { Link, Redirect } from 'react-router-dom';
 import Footer1 from './global_footer';
 import Header from './NavBar';

class GlobalHomePage extends Component {

    render() {
       const iconStyles= {
        // marginLeft:"100%", 
         float: "left",
         clear: "left",
         height:"60px",
         width:"90px"
         
       }
      

        return (
            <>
            <Header />
            <hr />

            <div className="container align-items-center">      {/*MAIN class BORDER */}
            <div divID="icon" styles={iconStyles} align="left">
                                              <img src={process.env.PUBLIC_URL + "/image/goraitech.jpg"}
                                              alt="pic" width="150px" class="iconStyles" align="left" />
                                              </div>
                  
                  <h1 className="text-left display-1 font-weight-bold underline" fontSize= "700px">CHAKURI</h1>
               <h3 class="text-left">A PLATFORM FOR JOBSEEKERS,TRAINERS & EMPLOYERS</h3>
               
<hr></hr>

                {/*MAIN START BORDER */}




{/*frist coloum start */}
<div className="mt-5 m-5 ">
                   {/*Second-Border-Main */}
                  



                  <h3></h3>
         <div className="container">
             <div className='mt-5'>
                <div className="border m-4  border-dark   " >
                                            <h5 class="mb-3 text-center">WHO ARE WE?</h5>
                                            <div class="column" divID="icon" styles={iconStyles} align="right">
                                              <img src={process.env.PUBLIC_URL + "/image/who.jpg"}
                                              alt="pic" width="70px" class="iconStyles" align="right" />
                                              </div>
                  <dl class="row ">
                 
                     <dd class="text-center">Welcome! Our team at Gorai Technology Software is proud to present a new  and improved
                     platform to connect Job Seekers, Trainers and Employers.
                      </dd>
                  </dl>
               </div>
            </div>
        </div>

  


         <div className="container">
             <div className="mt-5 mb-4">
                <div className="border m-4  border-dark" >
                                            <h5 class="mb-3 text-center">WHAT WE DO?</h5>
                                            <div class="column" divID="icon" styles={iconStyles} align="right">
                                              <img src={process.env.PUBLIC_URL + "/image/what.jpg"}
                                              alt="pic" width="70px" class="iconStyles" align="right" />
                                              </div>
                  <dl class="row ">
                     
                     <dd class="text-center">Our service will help the individuals to search for jobs which is the most suitable for their skills.
                     We will manage and connect various employers looking for fresh job seeking individuals like Engineers, Architects, Teachers, Drivers, Plumbers etc</dd>
                  </dl>
               </div>
            </div>
        </div>


<div className="container">
<div className='mt-5'>
   <div className="border m-4  border-dark" >
    <h5 class="mb-3 text-center">HOW DO WE DO IT?</h5>
    <div class="column" divID="icon" styles={iconStyles} align="right">
                                              <img src={process.env.PUBLIC_URL + "/image/how.jpg"}
                                              alt="pic" width="70px" class="iconStyles" align="right" />
                                              </div>
    <dl class="row ">
        <dd class="text-center">We utilise smart solutions using Artificial Intelligence(AI) and Machine Learning(ML) capabilities to find most suitable skilled
        resources for their desired job description</dd>
         </dl>
         </div>
   </div>
</div>

<div className="container">
<div className="mt-5">
   <div className="border m-4  border-dark" >
    <h5 class="mb-3 text-center">LOOK AT OUR STATISTICS!</h5>
    <dl class="row ">
        <dd class="col-sm-7">No. of JobSeekers on our platform:<mark class="blue">33000</mark>   </dd><br/>
        <dd class="col-sm-7">No. of Employers on our platform:<mark class="blue">12,899</mark>   </dd><br/>
        <dd class="col-sm-7">Jobs acquired by Jobseekers: <mark class="blue">24,750</mark>  </dd><br/>
         </dl>
         </div>
   </div>
</div>

<div className="container">
             <div className="mt-5 ml-2 mr-2">
                <div className="border m-4   border-dark" >
                                            <h5 class="mb-1 text-center">EMPLOYER COLLABORATION(UNDER DISCUSSION) WITH OVER 100 COMPANIES</h5>
                                            <div class="row">
                                            
                                             
                                          
                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/amazon.jpg"}
                                              alt="pic" width="75px" height="60px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/tcs.jpg"}
                                              alt="pic" width="100px"/>
                                              </div>
                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/Accenture.jpg"}
                                              alt="pic" width="100px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/hcl.jpg"}
                                              alt="pic" width="200px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/infosys.jpg"}
                                              alt="pic" width="100px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/kpmg.jpg"}
                                              alt="pic" width="100px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/wipro.jpg"}
                                              alt="pic" width="100px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/flipkart.jpg"}
                                              alt="pic" width="100px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/ntt.jpg"}
                                              alt="pic" width="90px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/micron.jpg"}
                                              alt="pic" width="90px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/data.jpg"}
                                              alt="pic" width="150px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/reli.jpg"}
                                              alt="pic" width="150px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/cogn.jpg"}
                                              alt="pic" width="150px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/micro.jpg"}
                                              alt="pic" width="150px"/>
                                              </div>

                                              <div class="column">
                                              <img src={process.env.PUBLIC_URL + "/image/google.jpg"}
                                              alt="pic" width="150px"/>
                                              </div>
                                              </div>

                                              
                                             
                                    
               </div>
            </div>
        </div>
        <div className="container">
<div className='mt-5'>
   <div className="border m-3  border-dark" >
    <h5 class="mb-3 text-center">HEAR WHAT PEOPLE SAID ABOUT OUR PLATFORM</h5>
    <div class="column" divID="icon" styles={iconStyles} align="left">
                                              <img src={process.env.PUBLIC_URL + "/image/rev1.jpg"}
                                              alt="pic" width="65px" class="iconStyles" align="left" />
                                              </div>
    <dl class="row ">
        <dd class="text-center text-italics">"I recently completed my Bachelors and had no idea how to approach and apply for jobs. Registration was the 
        best decision,not only did they assist me in getting placed but also how to connect well with the employers."</dd>
        
       
           
       
         </dl><br/>
         <div class="column" divID="icon" styles={iconStyles} align="right">
                                              <img src={process.env.PUBLIC_URL + "/image/rev2.jpg"}
                                              alt="pic" width="65px" class="iconStyles" align="right" />
                                              </div>
    <dl class="row ">
        <dd class="text-center text-italics">"I was looking to hire fresh minds for our company and this platform greatly assisted in selecting
        the brightest minds for our company. The freshers now have branched out and running our companies in 3 continents!"</dd>
        
       
           
       
         </dl>
<br/>
         <div class="column" divID="icon" styles={iconStyles} align="left">
                                              <img src={process.env.PUBLIC_URL + "/image/rev3.jpg"}
                                              alt="pic" width="60px" height="50px" class="iconStyles" align="left" />
                                              </div>
    <dl class="row ">
        <dd class="text-center text-italics">"I loved cooking, and I always wanted to be a chef. But I found it difficult to find work
        as this was my only primary skill. Thanks to Chakuri, I am now working at my restaurant!"</dd>
        
       
           
       
         </dl><br/>
         <div class="column" divID="icon" styles={iconStyles} align="right">
                                              <img src={process.env.PUBLIC_URL + "/image/rev4.jpg"}
                                              alt="pic" width="65px" height="50px" class="iconStyles" align="right" />
                                              </div>
    <dl class="row ">
        <dd class="text-center text-italics">"I only know how to drive cars and trucks. Now I drive for large company and making
        very good salary. Chakuri help me find good company. This is very good website"</dd>
        
       
           
       
         </dl><br/>
         <div class="column" divID="icon" styles={iconStyles} align="left">
                                              <img src={process.env.PUBLIC_URL + "/image/rev5.jpg"}
                                              alt="pic" width="40px" height="45px" class="iconStyles" align="left" />
                                              </div>
    <dl class="row ">
        <dd class="text-center text-italics">"The very best. Chakuri is worth much more than I paid for an other platform.
        Very easy to use."</dd>
        
       
           
       
         </dl>
       
         </div>
         <div className="text-center font-bold">
         <dd>Let us help you get started with your professional career right now! Register now to give us the opportunity to help
            us put you on the right career path!</dd>  </div>
   </div>
   <div class="wrapper">
      <div className="text-center">
         <FormGroup>
          <ButtonGroup>  
         <NavLink className="nav-link-icon" to="/register" tag={Link}>
  <button class="button">Register</button>
  </NavLink>
  <NavLink className="nav-link-icon" to="/login" tag={Link}>
  <button class="button">login</button>
  </NavLink>
  </ButtonGroup> 
  </FormGroup>
  </div>
</div>
<div className="text-center font-bold">
         <dd>-------------------------------------------------------OR-------------------------------------------------------</dd>  
   </div>
   <div className="text-center font-bold">
      <h2>Check out our job search engine</h2>
   </div>
   <Form>
  <FormGroup as={Row} >
    <FormLabel column sm="2">Enter Keywords</FormLabel>
    <FormControl type="text" placeholder="Ex:Python, FullStack Developers" />
    
  

  
    <FormLabel column sm="2">Enter Location</FormLabel>
  
    <FormControl type="text" placeholder="Ex: Pune,Delhi" />

  </FormGroup>
  <Button variant="primary" type="search">
    Search
  </Button>
  </Form>


</div>
<br /> <br />
< Footer1 />

</div>
</div>        




{/*frist coloum end */}



{/*Second coloum start */}


{/*frist coloum end */}








                                             {/*MAIN START BORDER */}
                      
                         
                         </>
     );
 }
}

export default GlobalHomePage;