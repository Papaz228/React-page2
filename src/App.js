import './App.css';
import React from 'react';
import Main from './Main';
import Services from './Services';
import Contact from './Contact';
import About from './About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
             <Routes>
             <Route path='/index' element={<Main/>} />
                 <Route path="/services" element= {<Services/>}/>
                 <Route path="/contact" element={<Contact/>}/>
                 <Route path="/about" element={<About/>}/>
             </Routes>
     </Router>
  )
}
export default App;

