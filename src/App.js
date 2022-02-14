import './App.css';
import React from 'react';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import {BrowserRouter} from 'react-router-dom';
import RouteApp from './RouteApp';


function App() {

  return(
    <div className='App'>
      <BrowserRouter forceRefresh={true}>
      
        <Navigation />

          <RouteApp />
       
          <Footer />
      </BrowserRouter>
    </div>
  )
}
  
export default App;
