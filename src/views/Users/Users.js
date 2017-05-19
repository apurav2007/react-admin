import React, { Component } from 'react';

class Users extends Component {
  constructor() {
     super();

     this.state = {
        data:
        [
           {
              "id":1,
              "name":"Vishnu Serghei",
              "email":"Vishnu@gmail.com",
              "status":"1",
              "date":"2012/01/01"
           },
           {
              "id":2,
              "name":"Vishnu 2",
              "email":"Vishnu2@gmail.com",
              "status":"0",
              "date":"2012/01/01"
           },
           {
              "id":3,
              "name":"Vishnu 3",
              "email":"Vishnu3@gmail.com",
              "status":"1",
              "date":"2012/01/01"
           },
           {
              "id":4,
              "name":"Vishnu 4",
              "email":"Vishnu4@gmail.com",
              "status":"1",
              "date":"2012/01/01"
           },
           {
              "id":5,
              "name":"Vishnu 5",
              "email":"Vishnu5@gmail.com",
              "status":"0",
              "date":"2012/01/01"
           },

        ]
     }
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Users Manager
                <button type="button" class="btn btn-success btn-sm pull-right">Primary</button>
              </div>
              <div className="card-block">
                <table className="table table-bordered table-striped table-condensed">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Date registered</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                      {this.state.data.map((user, i) => <TableRow key = {i} data = {user} />)}
                  </tbody>
                </table>
                <nav className="pull-right">
                  <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class TableRow extends React.Component {
   render() {
      return (
        <tr>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.email}</td>
          <td>{this.props.data.date}</td>
          <td>
            <span className={ this.props.data.status==1 ? 'badge badge-success':'badge badge-danger' } > { this.props.data.status==1 ? 'Active':'Inactive' }</span>
          </td>
          <td>
            <a href=""><i className="fa fa-edit fa-lg"></i></a>
            &nbsp;&nbsp;
            <a href=""><i className="fa fa-remove fa-lg"></i></a>
          </td>
        </tr>
      );
   }
}

export default Users;
