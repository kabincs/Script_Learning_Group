import React   from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faAppleAlt,faPlay} from '@fortawesome/free-solid-svg-icons'
//import {Link } from 'react-router-dom';

 function Footer() {

        return (
            <FooterContainer className="main-footer">
                <div className="footer-middle">
                     <div className="container">
                            <div className ="row">
                                <div className="col-md-3 col-sm-6">
                                   <ul className ="list-unstyled">
                                  <li><h4><a href="#" class="badge text-white" >Job By Location:</a></h4></li> 
                                  <li><h4><a href="#" class="badge text-white" >Job in Bangalore</a></h4></li> 
                                  <li><h4><a href="#" class="badge text-white" >Job in Chennia</a></h4></li>   
                                  <li><h4><a href="#" class="badge text-white" >Job in Kerala</a></h4></li>  
                                  <li><h4><a href="#" class="badge text-white" >Job in Delhi</a></h4></li> 
                                  <li><h4><a href="#" class="badge text-white" >Job in Mumbia</a></h4></li>   
                                   </ul>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                   <ul className ="list-unstyled">
                                    <li><h4><a href="#" class="badge text-white" >Popular Searches:</a></h4></li> 
                                    <li><h4><a href="#" class="badge text-white" >Data Analytics in Bangalore</a></h4></li> 
                                    <li><h4><a href="#" class="badge text-white" >Front End Developer in Mumbai</a></h4></li>   
                                    <li><h4><a href="#" class="badge text-white" >Truck Drivers in Rajasthan</a></h4></li>  
                                    <li><h4><a href="#" class="badge text-white" >Business Consultants in Delhi</a></h4></li> 
                                    <li><h4><a href="#" class="badge text-white" >Supply chain Manager in Kerala</a></h4></li>  
                                   </ul>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                   <ul className ="list-unstyled">
                                     <li><h4><a href="#" class="badge text-white" >More in Chakuri:</a></h4></li> 
                                    <li><h4><a href="#" class="badge text-white" >About Us</a></h4></li> 
                                    <li><h4><a href="#" class="badge text-white" >Privacy and Policy</a></h4></li>   
                                    <li><h4><a href="#" class="badge text-white" >FAQ</a></h4></li>  
                                    <li><h4><a href="#" class="badge text-white" >Terms and Conditions</a></h4></li> 
                                    <li><h4><a href="#" class="badge text-white" >Feedback</a></h4></li> 
                                  </ul>
                                </div>
                        
                                <div className="col-md-3 col-sm-6">
                                  <ul className ="list-unstyled">
                                    <li><h4><a href="#" class="badge text-white" >Contact Us:</a></h4></li> 
                                    <li><h4><a href="#" class="badge text-white" >chakuricustomercare@gmail.com</a></h4></li> 
                                    <li><h4><a href="#" class="badge text-white" >+91 33 67133010</a></h4></li>   
                                    <li><h4><a href="#" class="badge text-white" ><FontAwesomeIcon icon={faPlay}/>Facebook</a></h4></li>  
                                    <li><h4><a href="#" class="badge text-white" ><FontAwesomeIcon icon={faPlay}/>Twitter</a></h4></li> 
                                    <li><h4><a href="#" class="badge text-white" ><FontAwesomeIcon icon={faPlay}/>Instagram</a></h4></li> 
                                    <li><h4><a href="#" class="badge text-white" ><FontAwesomeIcon icon={faPlay}/>Youtube</a></h4></li> 
                                 </ul>
                                </div>
                        
                             </div>{/* row */}
                  
                   <div class="container">
                                  <div className="row">
                                             <div class="col">
                                                 <h4>Get it on your mobile phone on</h4>
                                            </div>
                                            <div class="col">
                                                   <div className="button">
                                                   <a href ="#" class="btn btn-dark btn-lg"><FontAwesomeIcon icon={faAppleAlt}/>Download on the<h4> App Store</h4></a>
                                                   </div>
                                             </div>
                                                     
                                              <div class="col">
                                                <h1 text-center>OR</h1>
                                              </div>

                                             <div class="col">
                                                   <div className="button">
                                                   <a href ="#" class="btn btn-dark btn-lg"><FontAwesomeIcon icon={faPlay}/>Get it on <h3>Google Pay</h3></a>
                                                  </div>
                                             </div>
                                  
                                                        {/*Footer Bottom */}
                                            <div className=" col footer-bottom text-right">
                                               <p className="text">
                                               &copy;CHAKURI 2020
                                                </p>
                                              </div>
                    </div>
                 </div>
                                       
                         </div> {/*container */}
                
                </div>{/*Footer Midder */}
            
            </FooterContainer>
        );
    
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle
{
    background: #007bff;
    padding -top:6rem;
    color: #fff;
    
}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

`;