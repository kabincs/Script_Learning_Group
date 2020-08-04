
import React, { Component } from 'react'
import Footer1 from '../components/global_footer';
import Header from '../components/footer_profile';
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faTrash,faEdit,faUpload} from '@fortawesome/free-solid-svg-icons'
class Profile extends Component {
   
    render() {
        return (
  
     
           <div>

               <Header />
               <div className="container">
                  <div class="row">

                    <div class="col-2">
                    <li> <big><FontAwesomeIcon icon={faUser}/></big></li>
                   <label >Name </label>
                    <input type ="text" class="text-primary" placeholder = "name" ></input>
                    <label>Current Role </label>
                    <input type ="text" class="text-primary" placeholder = "name" ></input>
                    <button type="button"  class="btn btn-primary">Switch Mode</button>
                    </div>
               

                  
                    <div class="col-2">
                    <ul class="nav navbar-nav">
                    <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">PROFILE MANAGEMENT</span> <span class="caret"></span></a>
                    <div class="dropdown-menu">
                    <h6 class="dropdown-header">PROFILE MANAGEMENT </h6>
                    <a class="dropdown-item" href="#">UPDATE PROFILE</a>
                    <a class="dropdown-item" href="#">PASSWORD</a>
                    <a class="dropdown-item" href="#">WORK EXPERIENCE</a>
                    <a class="dropdown-item" href="#">YOUR PROFILE VIEWER</a>
                    </div>
                    </li>
                    </ul>
                    </div>

                
                
                
                   <div class="col-2">
                   <ul class="nav navbar-nav">
                   <li class="dropdown">
                   <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">SKILLS EVALUATION</span> <span class="caret"></span></a>
                   <div class="dropdown-menu">
                   <h6 class="dropdown-header">SKILLS EVALUATION</h6>
                   <a class="dropdown-item" href="#">SELF ASSESSMENT</a>
                   <a class="dropdown-item" href="#">CHAKURI ASSESSMENT</a>
                   <a class="dropdown-item" href="#">EXTERNAL ASSESSMENT</a>
                  </div>
                   </li>
                   </ul>
                   </div>



                <div class="col-2">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">JOB DASHBOARD</span> <span class="caret"></span></a>
                <div class="dropdown-menu">
                <h6 class="dropdown-header">JOB DASHBOARD</h6>
                <a class="dropdown-item" href="/RecomendedJob">RECOMMENDED JOBS</a>
                <a class="dropdown-item" href="#">JOBS IN PROGRESS</a>
                <a class="dropdown-item" href="#">CONSULT WITH EMPLOYER</a>
                <a class="dropdown-item" href="#">CONSULT WITH RECRUITTER</a>
                </div>
                </li>
                </ul>
                </div>


                <div class="col-2">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">TRAINING PROGRAMS </span> <span class="caret"></span></a>
                <div class="dropdown-menu">
                <h6 class="dropdown-header">TRAINING PROGRAMS DASHBOARD</h6>
                <a class="dropdown-item" href="#">RECOMMENDED TRAININD</a>
                <a class="dropdown-item" href="#">TRAININD IN PROGRESS</a>
                <a class="dropdown-item" href="#">CONSULT WITH TRAINER</a>
                <a class="dropdown-item" href="#">CONSULT WITH RECRUITER</a>
                </div>
                </li>
                 </ul>
                </div>



                <div class="col-2">
                <ul class="nav navbar-nav">
                <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span class="nav-label">PLACEMENT ACTIVITY</span> <span class="caret"></span></a>
                <div class="dropdown-menu">
                <h6 class="dropdown-header">PLACEMENT ACTIVITY</h6>
                <a class="dropdown-item" href="#">RESUME REVIEWED</a>
                <a class="dropdown-item" href="#">RESUME SHORTLISTED</a>
               <a class="dropdown-item" href="#">ROUND STATUS</a>
               <a class="dropdown-item" href="#">JOB OFFERED/REJECTED</a>
               <a class="dropdown-item" href="#">ON JOB DETAILS</a>
               </div>
               </li>
               </ul>
               </div>


            </div>
          </div>

<hr className="border-dark"></hr>


<div className="container-fluid">
             <div className='mt-3'>
                <div className="border border-dark" >
<form>
    <div className="form-group">
    <label for="exampleInputHeadLine"><h4>Enter a Attractive Headline :</h4></label>
    <input type="text" class="text-primary" class="form-control" id="exampleInputHeadLine1" aria-describedby="emailHelp" placeholder="Describe yourself in one Line"></input>
    </div>
</form>
</div></div></div>

{/*Upload Resume start*/}

<div className="container-fluid">
             <div className='mt-3'>
                <div className="border border-dark" >
                <div class="row">
                                              <div class="col">
                                              <h5 class="mb-3">Upload CV/Resume:</h5>
                                              </div>
                                              <div class="col col-lg-2">
                                              <label><h5><FontAwesomeIcon icon={faUpload}/></h5></label>
                                              </div>
                                            </div>
                                            
  
                                            <label for="exampleFormControlFile1">File Name : </label>
                                            <input type="file" id="exampleFormControlFile1"></input>
                
                
                <div class="row">
                <div class="col-2">
                <button type="button" class="btn btn-link">Download</button>
                </div>
              
                <div class="col-6">
                <button type="button" class="btn btn-link">Delete</button>
                </div>
                </div>




               </div>
            </div>
        </div>
 {/*Upload Resume end*/}



{/*Personal Detail  Start*/}

        <div className="container-fluid">
             <div className='mt-3'>
                <div className="border border-dark" >

                                            <div class="row">
                                              <div class="col">
                                              <h5 class="mb-3">Personal Detail:</h5>
                                              </div>
                                              <div class="col col-lg-2">
                                              <label><h5><FontAwesomeIcon icon={faEdit}/></h5></label>
                                              </div>
                                            </div>

                                            <div className="container">
                                            
            <div class="row">
                  <div class="col">
                    <label>Name: </label>
                    <input type ="text" class="text-primary" placeholder = "name" ></input>
                  </div>
                  <div class="col">
                     <label>Middle Name: </label>
                    <input type ="text"  class="text-primary" placeholder = "middel name" ></input>
                  </div>
                 <div class="col">
                   <label>Name: </label>
                    <input type ="text" class="text-primary" placeholder = "lastname" ></input>
                 </div>
             </div>


             <div class="row">
                  <div class="col">
                    <label>Gender: </label>
                    <input type ="text"  class="text-primary"  placeholder = "gender" ></input>
                  </div>
                  <div class="col">
                    <label>Perment Adrress: </label>
                    <input type ="text"  class="text-primary" placeholder = "address" ></input>
                  </div>
             </div>

             <div class="row">
                  <div class="col">
                    <label> Nationality: </label>
                    <input type ="text" class="text-primary" placeholder = "nationality" ></input>
                  </div>
                  <div class="col">
                    <label>Mob.No: </label>
                    <input type ="text" class="text-primary" placeholder = "mobilenumber" ></input>
                    <label><h5><FontAwesomeIcon icon={faEdit}/></h5></label>
                  </div>
             </div>



             <div class="row">
                  <div class="col">
                    <label>Alternative Email: </label>
                    <input type ="email" class="text-primary" placeholder = "name@gmail.com" ></input>
                  </div>
                  <div class="col">
                    <label>Email: </label>
                    <input type ="email"  class="text-primary" placeholder = "name@gmail.com" ></input>
                    <label><h5><FontAwesomeIcon icon={faEdit}/></h5></label>
                  </div>
             </div>


          </div>
               </div>
            </div>
        </div>


{/*Personal Detail end*/}


{/*Education Background start*/}
        <div className="container-fluid">
             <div className='mt-3'>
                <div className="border border-dark" >

                               
                <div class="row">
                                              <div class="col">
                                              <h5 class="mb-3">Education Background:</h5>
                                              </div>
                                              <div class="col col-lg-2">
                                              <label><h5><FontAwesomeIcon icon={faEdit}/></h5></label>
                                              </div>
                                            </div>
                                            
                                            <div className="container">
<div class="col">
                  <div class="col-sm">
                    <label>Name of the Degree: </label>
                    <input type ="text" class="text-primary" placeholder = "name" ></input>
                  </div>
                  <div class="col-sm">
                     <label>Name of University Insititude: </label>
                    <input type ="text" class="text-primary"  placeholder = " name" ></input>
                  </div>
                 <div class="col-sm">
                   <label>Start Year:</label>
                    <input type ="text" class="text-primary"  placeholder = "year" ></input>
                 </div>
                < div class="col-sm">
                   <label>Date of Completion:</label>
                    <input type ="text" class="text-primary" placeholder = "year" ></input>
                </div>

           </div>
           </div>


               </div>
            </div>
        </div>


{/*Education Background end*/}

{/*SKILLS Background end*/}


<div className="container-fluid">
             <div className='mt-3'>
                <div className="border border-dark" >
                                            <h5 class="mb-3">Skills (master Data)</h5>
                                            <div className="container">
            <div class="row">
                  <div class="col">
                    <label><h5>Skills:</h5></label>
                    </div>
                  <div class="col">
                     <label><h5>Claim of Profiency: </h5></label>
                    </div>
                 <div class="col">
                   <label><h5>Primary Skills:</h5></label>
                    </div>
                    <div class="col">
                   <label><h5>Year of Experience:</h5></label>
                    </div>
                    <div class="col">
                   <label><h5><FontAwesomeIcon icon={faEdit}/></h5></label>
                    </div>
             </div>
<hr></hr>

<div class="row">
                  <div class="col">
                    <label>Phthon </label>
                    </div>
                  <div class="col">
                  <input type ="text" class="text-primary" placeholder = "1/10" ></input>
                    </div>
                 <div class="col">
                 <input type ="text" class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text"  class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                   <label><h5><FontAwesomeIcon icon={faTrash}/></h5></label>
                    </div>
             </div>
<hr></hr>
<div class="row">
<div class="col">
                    <label>C++ </label>
                    </div>
                  <div class="col">
                  <input type ="text" class="text-primary" placeholder = "1/10" ></input>
                    </div>
                 <div class="col">
                 <input type ="text"  class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                   <label><h5><FontAwesomeIcon icon={faTrash}/></h5></label>
                    </div>
             </div>
<hr></hr>


<div class="row">
                 <div class="col">
                    <label>SQL </label>
                    </div>
                  <div class="col">
                  <input type ="text" class="text-primary"  placeholder = "1/10" ></input>
                    </div>
                 <div class="col">
                 <input type ="text" class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                   <label><h5><FontAwesomeIcon icon={faTrash}/></h5></label>
                    </div>
             </div>
<hr></hr>
             <div class="row">
                 <div class="col">
                    <label>R </label>
                    </div>
                  <div class="col">
                    {/* <label>5/10 </label> */}
                    <input type ="text" class="text-primary" placeholder = "1/10" ></input>
                    </div>
                 <div class="col">
                 <input type ="text" class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                   < input type ="text" class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                   <label><h5><FontAwesomeIcon icon={faTrash}/></h5></label>
                    </div>
             </div>
  


          </div>
               </div>
            </div>
        </div>


{/*SKILLS Background end*/}






{/*Projects start*/}
        <div className="container-fluid">
             <div className='mt-3'>
                <div className="border border-dark" >
                <div class="row">
                                              <div class="col">
                                              <h5 class="mb-3">Project:</h5>
                                              </div>
                                              <div class="col col-lg-2">
                                              <label><h5><FontAwesomeIcon icon={faTrash}/></h5></label>
                                              </div>
                                            </div>


                                            <div class="col">
                  <div class="col-sm">
                    <label>Name : </label>
                    <input type ="text" class="text-primary" placeholder = "name" ></input>
                  </div>
                  <div class="col-sm">
                     <label>Name of Company/University/Institute: </label>
                    <input type ="text" class="text-primary" placeholder = " name" ></input>
                  </div>
                 <div class="col-sm">
                   <label>Start Year:</label>
                    <input type ="text" class="text-primary" placeholder = "year" ></input>
                 </div>
                < div class="col-sm">
                   <label>Year of Completion:</label>
                    <input type ="text" class="text-primary" placeholder = "year" ></input>
                </div>
             </div>



               </div>
            </div>
        </div>
{/*Projects end*/}


{/*Langauage Background end*/}


<div className="container-fluid">
             <div className='mt-3'>
                <div className="border border-dark" >
                                            <h5 class="mb-3">Langauage Known (master Data)</h5>
                                            <div className="container">
            <div class="row">
                  <div class="col">
                    <label><h5>Langauage Known </h5></label>
                    </div>
                  <div class="col">
                     <label><h5>Profiency </h5></label>
                    </div>
                 <div class="col">
                   <label> <h5>Read </h5> </label>
                    </div>
                    <div class="col">
                   <label><h5>Write </h5> </label>
                    </div>
                    <div class="col">
                   <label><h5>Speak</h5> </label>
                    </div>
                    <div class="col">
                   <label><h5><FontAwesomeIcon icon={faEdit}/></h5></label>
                    </div>
             </div>
<hr></hr>
<div class="row">
                  <div class="col">
                    <label>English</label>
                    </div>
                  <div class="col">
                  < input type ="text"  class="text-primary" placeholder = "Expert" ></input>
                    </div>
                 <div class="col">
                 < input type ="text" class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text"  class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                   <label><h5><FontAwesomeIcon icon={faTrash}/></h5></label>
                    </div>
             </div>
  


<hr></hr>


<div class="row">
                  <div class="col">
                    <label>Hindi </label>
                    </div>
                  <div class="col">
                  < input type ="text"  class="text-primary" placeholder = "Expert" ></input>
                    </div>
                 <div class="col">
                 < input type ="text"  class="text-primary"placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                    < input type ="text" class="text-primary" placeholder = "yes" ></input>
                    </div>
                    <div class="col">
                   <label><h5><FontAwesomeIcon icon={faTrash}/></h5></label>
                    </div>
             </div>
  


          </div>
               </div>
            </div>
        </div>


{/*Langauge end*/}





 <Footer1 />


           </div>  //main end



                
        )
    }
}
export default Profile;
