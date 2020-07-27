import React, {Component} from 'react';
import './Controller.css'
import {items} from "../../json/elements.json";


class Controller extends Component{
  constructor(){
    super()
    this.state = {
      step: 0,
      items: items
    }
  }

  nameOrder() {
    items.sort(function(a, b) {
       return a.name.localeCompare(b.name);
       
    });
    console.log(items)
    this.setState({
        ...this.state,
        items: items
    })
    console.log(this.state.items)
  }
  
  render() {
    return(
      <div className="Controller">
          {console.log(items)}
          <p onClick={this.nameOrder.bind(this)}>Nombre</p>
          <p>Relevancia</p>
          <p>Precio</p>

      </div>
    )
  }

}

export default Controller