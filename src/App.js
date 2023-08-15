
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='news' element={<p>News</p>} />
            <Route path='*' element={<p>Pagina Não Encontrada</p>} />

          </Route>
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
