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



            <div className="Filter">
            <p>Nombre</p>
            <button className="filter-button" onClick={this.nameOrder.bind(this)}>+</button>
            <button className="filter-button" onClick={this.nameOrderReverse.bind(this)}>-</button>
            </div>


            <div className="Filter">
            <p>Relevancia</p>
            <button className="filter-button" onClick={this.relevanceOrderReverse.bind(this)}>+</button>
            <button className="filter-button" onClick={this.relevanceOrder.bind(this)}>-</button>
            </div>

            <div className="Filter">
            <p>Precio</p>
            <button className="filter-button" onClick={this.priceOrderReverse.bind(this)}>+</button>
            <button className="filter-button" onClick={this.priceOrder.bind(this)}>-</button>
            </div>

            </div>
            {/* <Controller items={this.state.items}></Controller> */}

            <div className="item-list">

            {this.printItems(this.state.items, this.state.step)}
            <button className="button" onClick={this.addSteps.bind(this)}>Siguiente</button>
            </div>
            </div>
        )
    }



}

export default ItemList