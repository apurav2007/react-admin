import React, { Component } from 'react';

class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Users Manager
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
                    <tr>
                      <td>Vishnu Serghei</td>
                      <td>vishnu@gmail.com</td>
                      <td>2012/01/01</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                      <td>
                        <a href=""><i className="fa fa-edit fa-lg"></i></a>
                        &nbsp;&nbsp;
                        <a href=""><i className="fa fa-remove fa-lg"></i></a>
                     </td>

                    </tr>
                    <tr>
                      <td>Zbyněk Phoibos</td>
                      <td>Phoibos@gmail.com</td>
                      <td>2012/02/01</td>
                        <td>
                        <span className="badge badge-danger">Banned</span>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Einar </td>
                      <td>randall@gmail.com</td>
                      <td>2012/02/01</td>
                      <td>
                        <span className="badge badge-default">Inactive</span>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Félix Troels</td>
                      <td>rroels@gmail.com</td>
                      <td>2012/03/01</td>
                      <td>
                        <span className="badge badge-warning">Pending</span>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Aulus Agmundr</td>
                      <td>agmundr@gmail.com</td>
                      <td>2012/01/21</td>

                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                      <td></td>
                    </tr>
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

export default Tables;
