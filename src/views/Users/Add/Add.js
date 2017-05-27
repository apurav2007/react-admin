import React, { Component } from 'react';
import TextFieldGroup from '../../Components/Common/TextFieldGroup';

class Add extends Component {
  constructor() {
     super();
     this.state = {
       errors: {},
       isLoading: false
     };
  }
  render() {
    return (
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <strong>Add User</strong>
                </div>
                <div className="card-block">
                  <form action="" method="post" enctype="multipart/form-data" className="form-horizontal ">
                    <TextFieldGroup field="name" label="Name"  type="text" onChange={this.onChange} />
                    <TextFieldGroup field="email" label="Email"  type="text" onChange={this.onChange} />
                    <TextFieldGroup field="Phone" label="Phone"  type="text" onChange={this.onChange} />
                    <TextFieldGroup field="password" label="Password"  type="password" onChange={this.onChange} />
                    <TextFieldGroup field="cpassword" label="Confirm Password"  type="password" onChange={this.onChange} />

                    <div className="form-group row">
                      <label className="col-md-2 form-control-label" for="select">Role</label>
                      <div className="col-md-6">
                        <select id="select" name="select" className="form-control input-lg" size="1">
                          <option>Please select</option>
                          <option value="2">Sub-admin</option>
                          <option value="3">Client</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-2 form-control-label">Gender</label>
                      <div className="col-md-6">
                        <label className="radio-inline" for="inline-radio1">
                          <input type="radio" id="inline-radio1" name="inline-radios" value="option1"/> Male
                        </label>
                        <label className="radio-inline" for="inline-radio2">
                          <input type="radio" id="inline-radio2" name="inline-radios" value="option2"/> Female
                        </label>
                      </div>
                    </div>



                    <div className="form-group row">
                      <label className="col-md-2 form-control-label" for="file-input">File input</label>
                      <div className="col-md-2">
                        <input type="file" id="file-input" name="file-input"/>
                      </div>
                    </div>

                  </form>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Submit</button>
                  <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Reset</button>
                </div>
              </div>

            </div>

          </div>

        </div>
    )
  }
}



export default Add;
