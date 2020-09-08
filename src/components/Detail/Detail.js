import React, {Component} from 'react';
import {items} from "../../json/elements.json";
import './Detail.css'


class Detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: items,
            idn: this.props.idn,
            find: undefined,
            valid: false
        }
    
    }

    searchSelectedItem() {
        let find =  items.find( element => element.id === this.props.idn)

        if(!this.state.valid){this.setState({
            ...this.state,
            find: find,
            valid: true
        })
    } 
    }
   

    
    render() {
        return(
            <div>
            {console.log(this.state.find)}
            {this.searchSelectedItem()}
               {this.state.find !== undefined ? <section className="detail">
                    <p className="item-name">Prenda: {this.state.find.name}</p>
                     <p className="item-name">CIF: {this.state.find.CIF}</p>
                    <p className="item-name">Dirección: {this.state.find.adress}</p>
                    <p className="item-name">Fabricante: {this.state.find.manufacturer}</p>
                    <p className="item-name"> Precio: {this.state.find.price}€</p>
                    </section> : ''}     

            </div>
            
        )
    }


}

export default Detail