import React, { Component } from 'react';
import TextFieldGroup from '../../Components/Common/TextFieldGroup';
import { Link } from 'react-router'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.push('/'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    const { errors, email, password, isLoading } = this.state;
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
                    <TextFieldGroup
                      field="email"
                      value={email}
                      error={errors.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="input-group mb-2">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input type="password" className="form-control" error={errors.password}  onChange={this.onChange} placeholder="Password"/>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button type="submit" className="btn btn-primary px-2">Login</button>
                    </div>
                    <div className="col-6 text-right">
                      <Link to={'/pages/forgot'} className="btn btn-link px-0" > Forgot password?</Link>
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
