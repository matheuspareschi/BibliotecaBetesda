import './App.css'

import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';

import Form from './components/Registration/Form'
import View from './components/Vizualization/View';
import { Header } from './components/Header/header';


function App() {
  return (
    <div className="App">
      <Router> 
        <Header />
        <Switch>
          <Route exact path="/" element={<View />} />
          <Route path="/registration" element={<Form />} />  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
