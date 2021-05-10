import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home'
import Header from './components/partials/Header'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home}></Route>
    </Router>
  );
}

export default App;
