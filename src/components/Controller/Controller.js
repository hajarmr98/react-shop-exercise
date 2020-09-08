// import React, {Component} from 'react';
// import './Controller.css'
// import {items} from "../../json/elements.json";


// class Controller extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       step: 0,
//       items: this.props.items
//     }
//   }
//   nameOrder() {
//       console.log(this.props.items)
//     items.sort(function(a, b) {
//        return a.name.localeCompare(b.name);
       
//     });

//     this.setState({
//         ...this.state,
//         items: items
//     })

//   }
//   nameOrderReverse() {
//     items.sort(function(a, b) {
//        return a.name.localeCompare(b.name);
       
//     });
//     items.reverse()

//     console.log(items)

//     this.setState({
//         ...this.state,
//         items: items
//     })

//   }



//   relevanceOrder() {
//     items.sort(function(a, b){return a.relevance-b.relevance});


//     this.setState({
//         ...this.state,
//         items: items
//     })
//   }

//   relevanceOrderReverse() {
//     items.sort(function(a, b){return a.relevance-b.relevance});

//     items.reverse()
//     this.setState({
//         ...this.state,
//         items: items
//     })
//   }

//   priceOrder() {
//     items.sort(function(a, b){return a.price-b.price});

//     this.setState({
//         ...this.state,
//         items: items
//     })
//   }
  
//   priceOrderReverse() {
//     items.sort(function(a, b){return a.price-b.price});

//     items.reverse()
//     this.setState({
//         ...this.state,
//         items: items
//     })
//   }
  
//   render() {
//     return(
//   <div className="Controller">
//             <p onClick={this.nameOrder.bind(this)}>Nombre Ascendente</p>
//             <p onClick={this.nameOrderReverse.bind(this)}>Nombre Descendente</p>
//             <p onClick={this.relevanceOrder.bind(this)}>Relevancia</p>
//             <p onClick={this.relevanceOrderReverse.bind(this)}>Relevancia Descendente</p>
//             <p onClick={this.priceOrder.bind(this)}>Precio</p>
//             <p onClick={this.priceOrderReverse.bind(this)}>Precio Descendente</p>
//             </div> 
//     )
//   }

// }

// export default Controller

//EL PROBLEMA CON TENER UN CONTROLLER ES QUE NO SOLO TIENE QUE RECIBIR LA INFO DE LOS ITEMS SINO QUE TAMBIEN TIENE QUE MODIFICARLA CADA VEZ 