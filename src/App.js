import React, {Component} from 'react';

import Navigation from "./component/Navigation"
import Jumbotron from "./component/Jumbotron"
import CardDeck from './component/CardDeck'
import Carousel from './component/Carousel'
import Footer from './component/Footer'

class App extends Component {
  
  componentDidMount() {
    
    }

  render() {
    return(
      <div className="App">
          <Navigation />

          <Jumbotron/>

          <Carousel/>

          <CardDeck/>

          <Footer/>

         </div> 
    )
  }
}

export default App;