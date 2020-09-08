import React, {Component} from 'react';
import './App.css';
import ItemList from './components/ItemList/ItemList';
import Header from './components/Header/Header'
import Detail from './components/Detail/Detail'
import { UserProvider } from './context/context'

class App extends Component{

  constructor(){
    super()
    this.state = {
      mode: 0,
      idn: undefined,
      clicked: false

    }
  }
  setMode() {
    this.setState({
      mode: 1
    })
  }
  
  componentDidMount() {

    console.log(this.context)
  }
  getId(id) {
    console.log(id)
    this.setState({
      ...this.state,
      idn: id
    })
  }




  render() {
    return(
      <UserProvider value= {{
        state: this.state,
        getId: this.getId.bind(this)
      }}>
        {console.log(this.state.idn)}
      <div>
      <Header></Header>
      {this.state.idn === undefined ? <ItemList></ItemList> : <Detail idn={this.state.idn}></Detail>}

      </div>
      </UserProvider>
    )
  }

}

export default App




