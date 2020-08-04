import React, { Component } from 'react';
// import Axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import ls from 'local-storage';
import backgroundImage from '../assets/img/icons/common/4.svg';
import { connect } from 'react-redux';
import { login } from '../redux/action/user';
import axios from 'axios';
import Footer1 from '../components/global_footer'
import Header from '../components/footL';
import './styles.css';
// reactstrap components
import {
  Button,
  
  Alert,
  
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container
} from 'reactstrap';
import { FormControl, FormLabel, Card, CardBody,CardText } from 'react-bootstrap';

class Login extends Component {






  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: false,
      fields: {},
      errors: {}

      // visible: this.props.user.visible
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitUserLoginForm = this.submitUserLoginForm.bind(this);
    this.onDismiss = this.onDismiss.bind(this);

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.clearEmailError = this.clearEmailError.bind(this);
    this.clearPasswordError = this.clearPasswordError.bind(this);

  };

  onDismiss() {
    this.setState({ visible: false, isLogin: '' });
  }

  handleChange = e => {
    let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });
    
  }

  submitUserLoginForm(e) {
    e.preventDefault();
    var validationResult;

    validationResult=true;

    if (validationResult) {
        let fields = this.state.fields
        var url="https://e9b18385-28b5-414f-b976-a6ea8fdb783a.mock.pstmn.io/api/v1/users/login"
        //var url ='https://localhost:4711/users/login';

        //alert("Email: "+fields["email"]);
        //alert("password: "+fields["password"]);
         var payload = {
           gts_user_email: fields["email"],
           gts_user_password: fields["password"]
         };

             axios.put(url, payload)
               .then(res => {
                 var dataResponse = res.data;
                 let status_code = res.status;
                 //alert("status_code: "+status_code)

                 console.log(res);
                 if (status_code === 200) {

                   ls.set('token', dataResponse.token);

                   this.setState({
                     isLogin: true,
                     buttonDisable: true,
                     message: dataResponse.message,
                     visible: true
                   });

                   this.props.history.push('/dashboard');


                 } else {
                   this.setState({
                     isLogin: false,
                     buttonDisable: false,
                     visible: true
                   });
                 }
               })
               .catch(err => {
                ls.set('token', "abc");
                this.props.history.push('/dashboard');
                //alert("Enter valid Email & Password");

                let fields = this.state.fields;
                let errors = this.state.errors;

                errors["password"] = "Please enter valid Email & Password.";


                this.setState({
                  errors: errors
                });
                 /*¨
                 console.log(err);
                 this.setState({
                   isLogin: false,
                   buttonDisable: false,
                   message: err.response.data.message,
                   visible: true
                 });*/
               });
    }
  }




    clearEmailError = e =>  {
        let fields = this.state.fields;
        let errors = this.state.errors;
        let formIsValid = true;

        //alert("Field name: "+e.target.name)

        if(e.target.name=="email"){
            errors["email"] = "";

            this.setState({
              errors: errors
            });

            return formIsValid;
        }

    }


      clearPasswordError = e =>  {
          let fields = this.state.fields;
          let errors = this.state.errors;
          let formIsValid = true;

          //alert("Field name: "+e.target.name)

          if(e.target.name=="password"){
              errors["password"] = "";

              this.setState({
                errors: errors
              });

              return formIsValid;
          }

    }



  validateEmail = e =>   {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;

    //alert("Validate Email: "+fields["email"])

    if (!fields["email"]) {
        //alert("Enter email")
        formIsValid = false;
        errors["email"] = "Please enter your email-ID.";

        this.setState({
          errors: errors
        });

        return formIsValid;
    }

    if (typeof fields["email"] !== "undefined") {
        //alert("Enter valid email")

        //Production
        //var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        //Development
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "Please enter valid email-ID.";
        }

        this.setState({
          errors: errors
        });

        return formIsValid;
    }

  }

    validatePassword = e =>   {
        let fields = this.state.fields;
        let errors = this.state.errors;
        let formIsValid = true;

        //alert("Password: "+fields["password"])

        if (!fields["password"]) {
          //alert("Enter valid password")
          formIsValid = false;
          errors["password"] = "Please enter your password.";

            this.setState({
              errors: errors
            });


          return formIsValid;
        }


        if (typeof fields["password"] !== "undefined") {
          //alert("Enter valid password")
          //alert("Password: "+fields["password"])

          //Production
          //if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/)) {

          //Development
          if (!fields["password"].match(/^.*(?=.{2,}).*$/)) {
            formIsValid = false;
            errors["password"] = "Please enter secure and strong password .";
          }

            this.setState({
              errors: errors
            });

          return formIsValid;
        }

      }


  loginInvalid = () => {
    if (this.props.user.isLogin === false) {
      return (
        <Alert
          style={{ textAlign: 'center' }}
          color="danger"
          isOpen={this.props.user.visible}
        >
          {this.props.user.message}
        </Alert>
      );
    } else if (this.props.user.isLogin === true) {
      return (
        <>
          <Alert color="success" isOpen={this.props.user.visible}>
            {this.props.user.message}
          </Alert>
          {this.props.history.push('/dashboard')}
        </>
      );
    }
  };

     render() {

        const errorMessageStyles = {
            //backgroundColor: "#f0f",
            //fontSize: someSize,
            color: "#ff4d4d",
            //padding: paddings
        }
       

        let logintoken;
        if (ls.get('token') && ls.get('token') !== undefined) {
          logintoken = <Redirect to="/" />;
        } else {
          logintoken = <Redirect to="/login" />;
        }
        return (
          
          <>
         
            {logintoken}
            <div>
              <Header />
              <div class="d-flex justify-content-around">
              <div className="left">
              <Container className="left">
              <Row className="left mt-7">
                <Col lg="5">
              <Card border='primary'  style={{ width: '16rem' }} Align='left'>
    
    <Card.Body>
      
      <Card.Text>
        DON'T DELAY! JOIN US AND LET US HELP YOU GET YOU YOUR DREAM JOB!
      </Card.Text>
    </Card.Body>
  </Card>
  </Col></Row></Container></div>
           
            
              <Container
                className="pt-lg-md"
                // style={{ backgroundImage: `url(${backgroundImage})` }}
                
              >
                <Row className="justify-content-center mt-7">
                  <Col lg="5">
                  <div className="text-center text-muted mb-4">
                          <h1>Login Below</h1>
                        </div>
                        <Form method="put"  name="userloginForm"  onSubmit= {this.submitUserLoginForm} >

                          <FormGroup className="mb-3" controlId="formBasicEmail">
                          <FormLabel>Enter Email</FormLabel>
                           
                              <FormControl
                                type="text"
                                name="email"
                                placeholder="John Doe"
                                value={this.state.fields.email}
                                onChange={this.handleChange}
                                onBlur={this.validateEmail}
                                onFocus={this.clearEmailError}
                              ></FormControl>
                           
                          </FormGroup>

                          <FormGroup className="mb-3">
                            <div divID="emailError" style={errorMessageStyles}>{this.state.errors.email}</div>
                          </FormGroup>


                          <FormGroup className="mb-3" controlId="formBasicPassword">
                          <FormLabel>Enter Password</FormLabel>
                            
                              <FormControl
                                type="password"
                                name="password"
                                placeholder="****************"
                                value={this.state.fields.password}
                                onChange={this.handleChange}
                                onBlur={this.validatePassword}
                                onFocus={this.clearPasswordError}
                              ></FormControl>
                            
                          </FormGroup>

                          <FormGroup className="mb-3">
                            <div divID="passwordError" style={errorMessageStyles}>{this.state.errors.password}</div>
                          </FormGroup>

                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customCheckLogin"
                              type="checkbox"
                            />
                          </div>

                          <div className="text-center">
                            <FormGroup>
                              <Button color="primary"> Log In </Button>
                            </FormGroup>
                          </div>

                          <Col>
                            <div>{this.loginInvalid()}</div>
                          </Col>
                        </Form>
                     

                    {/* <Col className="text-justify-center" xs="6">
                      <div>Don't have an account?</div>
                      <div>
                        <Link to="/register"> Register here</Link>{' '}
                      </div>
                    </Col> */}
                   
                  </Col>
                </Row>
              </Container>
            </div>
           </div>
          </>
         
        );
      }
    }

    const bgImage = {
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${backgroundImage})`
    };



    const mapStateToProps = state => ({
      user: state.user
    });

    export default connect(mapStateToProps)(Login);
