import React, {Component} from 'react';

class CardDeck extends Component {

  render() {
    return(
      <div className="CardDeck">
      <div className="container">
          <div className="card-deck">
           <div className="card" >
             <img className="card-img-top" src="https://travelmaker.id/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-04-at-00.59.28-min.jpeg" alt="Card image cap"/>
             <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
           </div>  
           <div className="card" >
             <img className="card-img-top" src="https://travelmaker.id/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-04-at-00.59.28-min.jpeg" alt="Card image cap"/>
             <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
           </div>  
            <div className="card" >
             <img className="card-img-top" src="https://travelmaker.id/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-04-at-00.59.28-min.jpeg" alt="Card image cap"/>
             <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
           </div> 
           <div className="card" >
             <img className="card-img-top" src="https://travelmaker.id/wp-content/uploads/2019/07/WhatsApp-Image-2019-07-04-at-00.59.28-min.jpeg" alt="Card image cap"/>
             <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#" className="btn btn-primary">Go somewhere</a>
             </div>
           </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default CardDeck;

