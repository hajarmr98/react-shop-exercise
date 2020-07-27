import React, {Component} from 'react';
import './Item.css'


class Item extends Component {
    render() {
        return(
                    <section className="item">
                    <p className="item-name">{this.props.name}</p>
                    <p className="item-relevance">{this.props.relevance}</p>
                    <p className="item-price">{this.props.price}€</p>
                    {/* <img className="item-image"src={this.props.imageSrc} alt={this.props.alt}></img> */}
                    </section>
        )
    }


}

export default Item
