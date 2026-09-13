import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Learning from './pages/Learning'
import Contact from './pages/Contact'
import GoodMaiden from './pages/GoodMaiden'
import Mutram from './pages/Mutram'
import TurkeyMorocco from './pages/TurkeyMorocco'
import Chitosan from './pages/Chitosan'
import HelloNift from './pages/HelloNift'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/work/good-maiden" element={<GoodMaiden />} />
        <Route path="/work/mutram" element={<Mutram />} />
        <Route path="/work/turkey-morocco" element={<TurkeyMorocco />} />
        <Route path="/work/chitosan" element={<Chitosan />} />
        <Route path="/work/hello-nift" element={<HelloNift />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App