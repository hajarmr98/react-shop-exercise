import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './components/ItemList/ItemList';
import Header from './components/Header/Header'
import Controller from './components/Controller/Controller'


class App extends Component{
  constructor(){
    super()
    this.state = {
      step: 0
    }
  }

  render() {
    return(
      <div>
      <Header></Header>
      {/* <Controller></Controller> */}
      <ItemList></ItemList>

      </div>
    )
  }

}

export default App




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
