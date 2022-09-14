import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import ErrorPage from "./pages/error/ErrorPage"
import Properties from './pages/properties/Properties';
import Layout from "./components/layout/Layout"
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
