
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<p>Home page</p>}/>
        <Route path='/news' element={<p>News</p>}/>
      </Routes>
      </BrowserRouter>

    </div> 
  );
}

export default App;
