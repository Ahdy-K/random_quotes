import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { connect } from 'react-redux'
import quotes from './quotes'
import {Badge, Button} from 'reactstrap'


export class QuoteComponent extends Component {

constructor(props){
    super(props)
    this.state= {
        quotes: quotes,
        index: Math.floor(Math.random() * quotes.length) + 1
    }
}
handleClick = ()=>{
  this.setState({
    index: Math.floor(Math.random() * quotes.length) 
  })
}
  render() {
      
      const quote = this.state.quotes[this.state.index]
    return (
      <div>
        
          <h3>{quote.quote}</h3>
          <p><Badge color="warning"> {quote.author}</Badge> </p>
          <Button color="danger" onClick= {this.handleClick}>Next Quote</Button>
        
      </div>
    )
  }
}

/*const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}
*/
export default QuoteComponent
