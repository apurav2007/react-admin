import React, { Component } from 'react';
import { Link } from 'react-router';
import TextFieldGroup from '../../Components/Common/TextFieldGroupIcon';
import validateInput from '../../../validation/login';

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

  isValid() {
   const { errors, isValid } = validateInput(this.state);
   console.log(errors);
   if (!isValid) {
     this.setState({ errors });
   }

   return isValid;
 }

  onSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {   alert('111');
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.push('/'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
    }}

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
                <form onSubmit={this.onSubmit}>
                <div className="card-block">
                  <h1>Login</h1>
                  { errors.form && <div className="alert alert-danger">{errors.form}</div> }
                  <p className="text-muted">Sign In to your account</p>

                  <TextFieldGroup
                    field="email"
                    label="Email"
                    value={email}
                    error={errors.email}
                    onChange={this.onChange}
                    icon="icon-envelope-open"
                    type="text"
                  />

                  <TextFieldGroup
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    icon="icon-lock"
                    type="password"
                  />


                  <div className="row">
                    <div className="col-6">
                      <button  disabled={isLoading} className="btn btn-primary px-2">Login</button>
                    </div>
                    <div className="col-6 text-right">
                      <Link to={'/pages/forgot'} className="btn btn-link px-0" > Forgot password?</Link>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;