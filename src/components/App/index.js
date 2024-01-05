//import logo from logo.svg';
import './App.css';
//import Linx from './components/Linx';
 import Main from '../Main';

import { Component } from 'react';

import { fetch } from 'whatwg-fetch';
import Series from '../../containers/Series';

class App extends Component{


  render(){
      return (
    <div className="App">
      <header className="App-header">
       
        <p>
          BEST TV SERIES
        </p>
     
        
        <br/>
      
        <Series/>
      </header>
    </div>
  );
  }
}
// function App() {



//   return (
//     <div className="App">
//       <header className="App-header">
       
//         <p>
//           BEST TV SERIES
//         </p>
//         <Intro msg="thisistheway"/>
//       </header>
//     </div>
//   );
// }

export default App;
