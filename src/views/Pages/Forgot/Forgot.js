import React, { Component } from 'react';
import { Link } from 'react-router'

class Forgot extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card-group mb-0">
              <div className="card p-2">
                <div className="card-block">
                  <h2>Forgot Password</h2>
                  <p className="text-muted">Email your email for reset password link.</p>
                  <div className="input-group mb-1">
                    <span className="input-group-addon"><i className="icon-envelope-open"></i></span>
                    <input type="text" className="form-control" placeholder="Email"/>
                  </div>
                  
                  <div className="row">
                    <div className="col-6">
                      <button type="button" className="btn btn-primary px-2">Reset Password</button>
                    </div>
                    <div className="col-6 text-right">
                      <Link to={'/'} className="btn btn-link px-0" > Back</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgot;
