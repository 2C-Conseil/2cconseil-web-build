import './App.css';
import RouteApp from './RouteApp';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import {BrowserRouter} from 'react-router-dom';

function App() {

  return(
    <div className='App'>
      <BrowserRouter forceRefresh={true}>
      
        <Navigation />

          <RouteApp />
       
          <Footer />
      </BrowserRouter>
    </div>
  );
};
  

export default App;
