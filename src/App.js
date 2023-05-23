
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Footer from './components/Footer';
import Top from './components/Top';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <SearchBox />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      <Top/>
    </BrowserRouter>
  );
}

export default App;
