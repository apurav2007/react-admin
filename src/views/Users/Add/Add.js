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
                    <TextFieldGroup field="email" label="Email"  type="text" onChange={this.onChange} />
                    <TextFieldGroup field="email" label="Email"  type="text" onChange={this.onChange} />

                    <div className="form-group row">
                      <label className="col-md-2 form-control-label" for="text-input">Email</label>
                      <div className="col-md-6">
                        <input type="text" id="text-input" name="text-input" className="form-control" placeholder="Text"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label" for="email-input">Email Input</label>
                      <div className="col-md-9">
                        <input type="email" id="email-input" name="email-input" className="form-control" placeholder="Enter Email"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label" for="password-input">Password</label>
                      <div className="col-md-9">
                        <input type="password" id="password-input" name="password-input" className="form-control" placeholder="Password"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label" for="disabled-input">Disabled Input</label>
                      <div className="col-md-9">
                        <input type="text" id="disabled-input" name="disabled-input" className="form-control" placeholder="Disabled" disabled/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label" for="textarea-input">Textarea</label>
                      <div className="col-md-9">
                        <textarea id="textarea-input" name="textarea-input" rows="9" className="form-control" placeholder="Content.."></textarea>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label" for="select">Select</label>
                      <div className="col-md-9">
                        <select id="select" name="select" className="form-control" size="1">
                          <option value="0">Please select</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label" for="select">Select Large</label>
                      <div className="col-md-9">
                        <select id="select" name="select" className="form-control input-lg" size="1">
                          <option value="0">Please select</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label" for="select">Select Small</label>
                      <div className="col-md-9">
                        <select id="select" name="select" className="form-control input-sm" size="1">
                          <option value="0">Please select</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label" for="select">Disabled Select</label>
                      <div className="col-md-9">
                        <select id="disabledSelect" className="form-control" disabled>
                          <option value="0">Please select</option>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label" for="multiple-select">Multiple select</label>
                      <div className="col-md-9">
                        <select id="multiple-select" name="multiple-select" className="form-control" size="5" multiple>
                          <option value="1">Option #1</option>
                          <option value="2">Option #2</option>
                          <option value="3">Option #3</option>
                          <option value="4">Option #4</option>
                          <option value="5">Option #5</option>
                          <option value="6">Option #6</option>
                          <option value="7">Option #7</option>
                          <option value="8">Option #8</option>
                          <option value="9">Option #9</option>
                          <option value="10">Option #10</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label">Radios</label>
                      <div className="col-md-9">
                        <div className="radio">
                          <label for="radio1">
                            <input type="radio" id="radio1" name="radios" value="option1"/> Option 1
                          </label>
                        </div>
                        <div className="radio">
                          <label for="radio2">
                            <input type="radio" id="radio2" name="radios" value="option2"/> Option 2
                          </label>
                        </div>
                        <div className="radio">
                          <label for="radio3">
                            <input type="radio" id="radio3" name="radios" value="option3"/> Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label">Inline Radios</label>
                      <div className="col-md-9">
                        <label className="radio-inline" for="inline-radio1">
                          <input type="radio" id="inline-radio1" name="inline-radios" value="option1"/> One
                        </label>
                        <label className="radio-inline" for="inline-radio2">
                          <input type="radio" id="inline-radio2" name="inline-radios" value="option2"/> Two
                        </label>
                        <label className="radio-inline" for="inline-radio3">
                          <input type="radio" id="inline-radio3" name="inline-radios" value="option3"/> Three
                        </label>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label">Checkboxes</label>
                      <div className="col-md-9">
                        <div className="checkbox">
                          <label for="checkbox1">
                            <input type="checkbox" id="checkbox1" name="checkbox1" value="option1"/> Option 1
                          </label>
                        </div>
                        <div className="checkbox">
                          <label for="checkbox2">
                            <input type="checkbox" id="checkbox2" name="checkbox2" value="option2"/> Option 2
                          </label>
                        </div>
                        <div className="checkbox">
                          <label for="checkbox3">
                            <input type="checkbox" id="checkbox3" name="checkbox3" value="option3"/> Option 3
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label">Inline Checkboxes</label>
                      <div className="col-md-9">
                        <label className="checkbox-inline" for="inline-checkbox1">
                          <input type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1"/>One
                        </label>
                        <label className="checkbox-inline" for="inline-checkbox2">
                          <input type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>Two
                        </label>
                        <label className="checkbox-inline" for="inline-checkbox3">
                          <input type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3"/>Three
                        </label>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label" for="file-input">File input</label>
                      <div className="col-md-9">
                        <input type="file" id="file-input" name="file-input"/>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-md-3 form-control-label" for="file-multiple-input">Multiple File input</label>
                      <div className="col-md-9">
                        <input type="file" id="file-multiple-input" name="file-multiple-input" multiple/>
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
