import React, {Component} from 'react';
import Item from '../Item/Item'
import './ItemList.css'
import {items} from "../../json/elements.json";
import Controller from '../Controller/Controller';

class ItemList extends Component {
    constructor(){
        super()
        this.state = {
            step : 0,
            
            items : items
        }
    }
    // printItems() {
    //     return this.state.items.map((el, id) => <Item id={id} key={id} name={el.name} price={el.price} imageSrc={el.img} alt={el.alt} relevance={el.relevance}/>)
    // }

    // printItems(items, step) {
    //     console.log(items)
    //         var itemsNew = []
    //         var i;
    //         for (i = 0; i < 10 ; i++) {
    //            itemsNew.push(<Item id={items[i].id} key={items[i].id} name={items[i].name} price={items[i].price} imageSrc={items[i].img} alt={items[i].alt} relevance={items[i].relevance}/>)
    //         }
    //         console.log(itemsNew)
    //         return itemsNew
    // }
    printItems(items, step) {
   
            var itemsNew = []
            var i;

            if (step < items.length - 10 ){

                for (i = step; i < step + 10 ; i++) {
                   itemsNew.push(<Item id={items[i].id} key={items[i].id} name={items[i].name} price={items[i].price} imageSrc={items[i].img} alt={items[i].alt} relevance={items[i].relevance}/>)
                }

            }
            else {
                itemsNew.push(<p>Se han agotado los artículos</p>)
            }

                return itemsNew
    }

    addSteps() {
        this.setState({
            ...this.state, step: this.state.step + 10
        })
    }



    nameOrder() {
        items.sort(function(a, b) {
           return a.name.localeCompare(b.name);
           
        });

        this.setState({
            ...this.state,
            items: items
        })

      }
      nameOrderReverse() {
        items.sort(function(a, b) {
           return a.name.localeCompare(b.name);
           
        });
        items.reverse()

        console.log(items)

        this.setState({
            ...this.state,
            items: items
        })

      }



      relevanceOrder() {
        items.sort(function(a, b){return a.relevance-b.relevance});


        this.setState({
            ...this.state,
            items: items
        })
      }

      relevanceOrderReverse() {
        items.sort(function(a, b){return a.relevance-b.relevance});

        items.reverse()
        this.setState({
            ...this.state,
            items: items
        })
      }

      priceOrder() {
        items.sort(function(a, b){return a.price-b.price});

        this.setState({
            ...this.state,
            items: items
        })
      }
      
      priceOrderReverse() {
        items.sort(function(a, b){return a.price-b.price});

        items.reverse()
        this.setState({
            ...this.state,
            items: items
        })
      }
    render() {
        return (
            <div>
            <div className="Controller">
            <p onClick={this.nameOrder.bind(this)}>Nombre Ascendente</p>
            <p onClick={this.nameOrderReverse.bind(this)}>Nombre Descendente</p>
            <p onClick={this.relevanceOrder.bind(this)}>Relevancia</p>
            <p onClick={this.relevanceOrderReverse.bind(this)}>Relevancia Descendente</p>
            <p onClick={this.priceOrder.bind(this)}>Precio</p>
            <p onClick={this.priceOrderReverse.bind(this)}>Precio Descendente</p>
            </div>

            <div className="item-list">

            {this.printItems(this.state.items, this.state.step)}
            <button className="button" onClick={this.addSteps.bind(this)}>Siguiente</button>
            </div>
            </div>
        )
    }



}

export default ItemList