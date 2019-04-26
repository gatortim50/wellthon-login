import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import Logo from '../../images/wellthon.jpg'

library.add(faUser)
library.add(faLock)

const initialState = {
  email: '',
  password: '',
  errors: {}
}
class Login extends Component {
  state = initialState

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    // this.props.history.push('/dashboard');
    this.props.loginUser(userData, this.props.history)
  }

  onSignup = e => {
    e.preventDefault()
    this.props.history.push('/register')
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <img style={{ width: '150px', height: '120px' }} src={Logo} alt="Wellthon" />
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1> Login </h1>
                    <p className="text-muted"> Sign In to your account </p>{' '}
                    <form onSubmit={this.onSubmit}>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText> @ </InputGroupText>{' '}
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Address"
                          name="email"
                          type="email"
                          value={this.state.email}
                          onChange={this.onChangeHandler}
                          error={this.state.errors.email}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <FontAwesomeIcon icon="lock" />
                          </InputGroupText>{' '}
                        </InputGroupAddon>{' '}
                        <Input
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChangeHandler}
                          error={this.state.errors.password}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" color="primary" block>
                            Login
                          </Button>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>
                </Card>{' '}
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{
                    width: 44 + '%'
                  }}
                >
                  <CardBody className="text-center">
                    <form onSubmit={this.onSignup}>
                      <div>
                        <h2> Sign up </h2> <p> Create Account. </p>
                        <Button color="primary" className="mt-3" active>
                          Register Now!
                        </Button>{' '}
                      </div>{' '}
                    </form>{' '}
                  </CardBody>{' '}
                </Card>{' '}
              </CardGroup>{' '}
            </Col>{' '}
          </Row>{' '}
        </Container>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(Login)
