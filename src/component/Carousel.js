import React, {Component} from 'react';

class Carousel extends Component {

  render() {
    return(
      <div className="Carousel">
        <div className="container p-3">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-60" src="https://travelmaker.id/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-04-at-00.59.28-min.jpeg" alt="First slide"/>
                  <div className="carousel-caption d-none d-md-block">
                  <h5>Lorem Ipsum</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-60" src="https://travelmaker.id/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-04-at-00.59.28-min.jpeg" alt="Second slide"/>
                  <div className="carousel-caption d-none d-md-block">
                  <h5>Lorem Ipsum 2</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-60" src="https://travelmaker.id/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-04-at-00.59.28-min.jpeg" alt="Third slide"/>
                  <div className="carousel-caption d-none d-md-block">
                  <h5>Lorem Ipsum 3</h5>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                  </div>

                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
      </div>
    )
  }
}

export default Carousel;