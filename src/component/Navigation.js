import React, {Component} from 'react';

class Navigation extends Component {

  render() {
    return(
      <div className="Navigation">

          <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark">
            <div className="container">
              <div className="navbar-header">
               <a className="navbar-brand" href="#">
               <i className="far fa-eye" weight="30" height="30"></i>
                &nbsp; Lorem Ipsum
              </a>
              <button className="navbar-toggler align-self-end" data-toggle="collapse" data-target="#menu-utama" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              </div>
              <div className="collapse navbar-collapse" id="menu-utama">
                <ul className="nav navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Example 1</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
    )
  }
}

export default Navigation;