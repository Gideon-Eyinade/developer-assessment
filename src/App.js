import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import {ProductProvider} from './components/Context'


class App extends React.Component{
  render(){
    return(
      <ProductProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </ProductProvider>
    );
  }
}

export default App;
