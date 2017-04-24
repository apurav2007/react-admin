import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card-group mb-0">
              <div className="card p-2">
                <div className="card-block">
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <div className="input-group mb-1">
                    <span className="input-group-addon"><i className="icon-envelope-open"></i></span>
                    <input type="text" className="form-control" placeholder="Email"/>
                  </div>
                  <div className="input-group mb-2">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button type="button" className="btn btn-primary px-2">Login</button>
                    </div>
                    <div className="col-6 text-right">
                      <button type="button" className="btn btn-link px-0">Forgot password?</button>
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

export default Login;
