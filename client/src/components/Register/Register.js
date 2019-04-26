import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { registerUser } from '../../actions/authActions';
import Logo from "../../images/wellthon.jpg";
library.add(faUser)
library.add(faLock)

const initialState = {
  name: '',
  email: '',
  password: '',
  password2: '',
  errors: {}
};
class Register extends Component {
  state = initialState;

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { name, email, password, password2 } = this.state;

    const newUser = {
      name: name,
      email: email,
      password: password,
      password2: password2
    };
    this.props.registerUser(newUser, this.props.history);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="app flex-row align-items-center">
        <Container >
          <Row className = "justify-content-center" >
            <img style={{ width: "150px", height: "120px" }}
              src={Logo}
              alt="Wellthon"
            />
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1> Register </h1>{' '}
                  <p className="text-muted"> Create your account </p>{' '}
                  <form noValidate onSubmit={this.onSubmit}>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="user" />
                        </InputGroupText>{' '}
                      </InputGroupAddon>{' '}
                      <Input
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
                      />{' '}
                    </InputGroup>{' '}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText> @ </InputGroupText>{' '}
                      </InputGroupAddon>{' '}
                      <Input
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                        info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                      />
                    </InputGroup>{' '}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="lock" />
                        </InputGroupText>{' '}
                      </InputGroupAddon>{' '}
                      <Input
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        error={errors.password}
                      />{' '}
                    </InputGroup>{' '}
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <FontAwesomeIcon icon="lock" />
                        </InputGroupText>{' '}
                      </InputGroupAddon>{' '}
                      <Input
                        placeholder="Confirm Password"
                        name="password2"
                        type="password"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
                      />{' '}
                    </InputGroup>{' '}
                    <Button color="success" block>
                      Create Account{' '}
                    </Button>{' '}
                  </form>{' '}
                </CardBody>{' '}
              </Card>{' '}
            </Col>{' '}
          </Row>{' '}
        </Container>{' '}
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(Register);
