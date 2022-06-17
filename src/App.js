import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogCategories from './pages/BlogCategories';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/categories" element={<BlogCategories/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
