import React, {Component} from 'react';

class Footer extends Component {

  render() {
    return(
        <div className="Footer container-fluid">
        <div className="container">
            <hr/>
            <br/>
            <p>
                <span><h4><b>Lorem Ipsum.</b></h4></span>
                <small>dolor sit amet consectetur adipisicing elit.</small>
                <br/>
                <small>loremipsum123@abc.com</small>
                <br/>
                <br/>
                <a href="#"><i className="fab fa-instagram-square"></i></a>
                &nbsp;
                <a href="#"><i className="fab fa-linkedin"></i></a>
                &nbsp;
                <i className="fas fa-envelope"></i>
            </p>
          <p>
            <small> Copyright &copy; 2020 Lorem Ipsum</small>
          </p>
        </div>           
    </div>
    )
  }
}

export default Footer;