import logo from './logo.svg';
import './App.css';
import './fonts.css'
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Landing from './components/Landing/Landing';

function App() {



  return (


    <div>
      <BrowserRouter >
        <Route path= "/" exact >
           <Landing></Landing> 
       </Route>
      </BrowserRouter>
    </div>


  );
}

export default App;
