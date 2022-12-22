import { BrowserRouter as Router , Link, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Cards from './components/cards/Cards';

function App() {
  return (
    <div className="App">

  {/* <Header/> */}
  <Router>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/cards/:id' element={<Cards/>}/>
    </Routes>
  </Router>
  <h2>what s up</h2>
    </div>
  );
}

export default App;
