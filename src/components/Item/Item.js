import React, {Component} from 'react';
import './Item.css'
import UserContext, { UserConsumer } from '../../context/context'


class Item extends Component {
    static contextType = UserContext

    constructor(props, context){
        super(props, context);
        this.state = {
            clicked : false,
            id: this.props.id

        }
    
    }

    // componentDidUpdate() {
    //     let prueba =  this.context.name
    //     prueba(this.state.clicked)
    //     console.log(prueba)

    // }

    render() {
        return(
            
        //     <ReactContext.Consumer>
        // {
        //   (context) => 
        //   (
        //       <li>
        //       <button onClick={context.getId({this.props.id})}>HOLI</button>
        //     </li>
        //   )
        // }
        // </ReactContext.Consumer>

                <section className="item" onClick={() => this.context.getId(this.props.id)}>
            
            {/* <UserConsumer>
            {(value) =>
                 {console.log(value)}
            }
             </UserConsumer> */}
                       
                    <p className="item-name">{this.props.name}</p>
                    <p className="item-relevance">{this.props.relevance}</p>
                    <p className="item-price">{this.props.price}€</p>
                    {/* <img className="item-image"src={this.props.imageSrc} alt={this.props.alt}></img> */}
                    </section>
                

        )
    }


}

export default Item
