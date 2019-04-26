import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../common/Spinner'
import Navbar from '../Layout/Navbar'

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth

    let dashboardContent

    if (user === null) {
      dashboardContent = <Spinner />
    } else {
      // Check if logged in user has profile data
      if (Object.keys(user).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <div style={{ marginBottom: '60px' }} />
          </div>
        )
      } else {
        // User is NOT logged in
        dashboardContent = (
          <div>
            <p className="lead text-muted">Please Sign Up or Login</p>
          </div>
        )
      }
    }

    return (
      <div className="dashboard">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  {}
)(Dashboard)
