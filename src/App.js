import './App.css'

import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import View from './components/Vizualization/View';
import BookEdition from './components/Edition/BookEdition';
import { Header } from './components/Header/header';
import Registration from './components/Registration/Registration';
import Err from './components/Err/Err';


function App() {
  return (
    <div className="App">
      <Router> 
        <Header />
        <Switch>
          <Route exact path="/" element={<View />} />
          <Route path="/registration" element={<Registration />} />  
          <Route path="/book/:id" element={<BookEdition />} />
          <Route path='*' element={<Err/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
