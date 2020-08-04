import React from 'react';
import Footer1 from '../components/global_footer';
import Header from '../components/foot';

// reactstrap components
import {
  Button,
   
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
  ButtonGroup
} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../assets/img/icons/common/4.svg';
import {Card, CardBody,CardText, FormControl, FormLabel,FormCheck } from 'react-bootstrap';

class Register extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirm_password: '',
      buttonDisabled: false,
      message: '',
      isError: '',
      visible: false,
      fields: {},
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
   // this.handleSubmit=this.handleChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateConfirmPassword=this.validateConfirmPassword.bind(this);
    this.clearEmailError = this.clearEmailError.bind(this);
    this.clearPasswordError = this.clearPasswordError.bind(this);
    this.clearConfirmPasswordError=this.clearConfirmPasswordError.bind(this);
    this.onSubmitHandler=this.onSubmitHandler.bind(this);
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
  }}
  clearConfirmPasswordError = e =>{
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;
  if(e.target.name=="confirm_password"){
    errors["confirm_password"]= "";
    this.setState({
      errors:errors
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
  }}

  validateConfirmPassword = e =>   {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;
  if (fields["password"]!==(fields["confirm_password"])){
    formIsValid=false;
    errors["confirm_password"]= "Passwords don't match";
  }
    this.setState({
      errors:errors
    });
    

    return formIsValid;
    


}


  registerInvalid = () => {
    if (this.state.isError === true) {
      return (
        <Alert
          color="danger"
          isOpen={this.state.visible}
          toggle={this.onDismiss}
          style={{ textAlign: 'center' }}
        >
          {this.state.message}
        </Alert>
      );
    } else {
      return (
        <>
          <Alert
            color="success"
            isOpen={this.state.visible}
            toggle={this.onDismiss}
          >
            {this.state.message}{' '}
            <Link className="mr-7" to="/login">
              Login
            </Link>
          </Alert>
          {/* <Redirect to="/dashboard" />; */}
        </>
      );
    }
  };

  

  onSubmitHandler = e => {
    e.preventDefault();
    var validationResult;

    validationResult=true;
    //this.setState({ buttonDisabled: true });
    if (validationResult) {
      let fields = this.state.fields
    var url =
      'https://e9b18385-28b5-414f-b976-a6ea8fdb783a.mock.pstmn.io/api/v1/users/register';
    var payload = {

                     gts_user_email :fields["email"],
                     gts_user_password :fields["password"],
                  };

    axios
      .post(url, payload)
      .then(response => {

        console.log(response);
        let message = response.message;
        if (
          this.state.message === 'Username already exist.' ||
          this.state.message === 'Register failed.'
        ) {
          this.setState({
            buttonDisabled: true,
            message,
            visible: true
          });
        } else {
          this.setState({
            buttonDisabled: false,
            isError: false,
            message: 'Register Success',
            visible: true
          });
        }
      })
      .catch(error => {

      /*
        let message = response.message;
        console.log("message: "+message);
        console.log(error);
        if (error.response.data.error === true) {
          this.setState({
            message: message,
            isError: true,
            visible: true
          });
        }

        */
      });
  }
}

  render() {
    const errorMessageStyles = {
      //backgroundColor: "#f0f",
      //fontSize: someSize,
      color: "#ff4d4d",
      //padding: paddings
  }
    return (
      <>
        {/* <DemoNavbar /> */}
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Header />
           
            <div class="d-flex justify-content-around">
            <div Align="left">
            
            <Card border="primary"  style={{ width: '18rem' }}>
    
    <Card.Body>
      
      <Card.Text>
        <dl>
     <dd>  By Registering, you are getting:</dd>
    <dd>   * Access to contact with Trainers and Recruiters</dd>
     <dd>  * 24*7 Customer Care Support</dd>
     <dd>  * Message board communication</dd></dl>
      </Card.Text>
    </Card.Body>
  </Card></div>
          <Container className="pt-lg-md">
              <Row className="justify-content-center mt-7">
                <Col lg="5">
                  
                      <div className="text-center text-muted mb-4">
                        <h1>Register Below</h1>
                      </div>
                      <Form method="post" name="handler" onSubmit={this.onSubmitHandler}>
                        <FormGroup className="mb-3" controlId="formBasicEmail">
                        <FormLabel>Enter Email</FormLabel>
                            <FormControl
                              type="text"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="John Doe"
                              value={this.state.fields.email}
                              onChange={this.handleChange}
                                onBlur={this.validateEmail}
                                onFocus={this.clearEmailError}>
                            </FormControl>
                         
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <div divID="emailError" style={errorMessageStyles}>{this.state.errors.email}</div>
                          </FormGroup>


                        <FormGroup className="mb-3" controlId="formBasicPassword">
                        <FormLabel>Enter Password</FormLabel>
                            
                            <FormControl
                              type="password"
                              name="password"
                              id="password"
                              className="form-control"
                              placeholder="**********"
                              value={this.state.fields.password}
                              onChange={this.handleChange}
                                onBlur={this.validatePassword}
                                onFocus={this.clearPasswordError} ></FormControl>
                            
                         
                        </FormGroup >
                        <FormGroup className="mb-3">
                            <div divID="passwordError" style={errorMessageStyles}>{this.state.errors.password}</div>
                          </FormGroup>


                        <FormGroup className="mb-3" controlId="formBasicPassword">
                          <FormLabel>Re-enter Password</FormLabel>
                            <FormControl
                              type="password"
                              name="confirm_password"
                              id="confirm_password"
                              className="form-control"
                              placeholder="**********"
                              value={this.state.fields.confirm_password}
                              onChange={this.handleChange}
                                onBlur={this.validateConfirmPassword}
                                onFocus={this.clearConfirmPasswordError}></FormControl>
                          
                         
                        </FormGroup>
                        <FormGroup className="mb-3">
                            <div divID="confirmpasswordError" style={errorMessageStyles}>{this.state.errors.confirm_password}</div>
                          </FormGroup>


                        <div className="text-center">
                          <Button className="mt-4" color="info" type="submit">
                            Register
                          </Button>
                        </div>
                        
                        <div>
                         <Col>
                           <div>{this.registerInvalid()}</div>
                          </Col>
                        </div>
                      </Form>
                    
                      </Col>
              </Row>
            </Container>

            <div Align="right">
    <dl>
    <dd>Select Role(You can have multiple, but please state one role as your default as well):</dd>
    </dl>
    <div class="wrapper">
     <FormGroup>
       <ButtonGroup>
       <div className=" checkbox">
          <label>
            <input type="checkbox" value="option1" checked={true} />
            JobSeeker
          </label>
        </div>
        <br/>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="option1"  />
            Employer
          </label>
        </div>
        <br/>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="option1"  />
            Recruiter
          </label>
        </div>
        <br/>
        <div className="checkbox">
          <label>
            <input type="checkbox" value="option1"  />
            Trainer
          </label>
        </div></ButtonGroup></FormGroup></div>
        <div class="wrapper">
        <FormGroup>
          <ButtonGroup>
  <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true} />
            default
          </label>
        </div>
        
        <div className="radio">
        <div className="column">
          <label>
            <input type="radio" value="option1"  />
            default
          </label>
        </div></div>
        <div className="radio">
          <label>
            <input type="radio" value="option1"  />
            default
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option1"  />
            default
          </label>
          </div>
          </ButtonGroup>
          </FormGroup>
          </div>
          </div>
           
           
  </div>
            <Footer1 />
          </section>
        </main>
        
        {/* <SimpleFooter /> */}
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
export default Register;
