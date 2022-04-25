import React, { Component } from 'react';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Repairs from './Pages/Repairs';
import Services from './Pages/Services';
import ScrollToTop from './Components/ScrollToTop'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <div>
       <ScrollToTop>
        <Routes>
          <Route index path='/helptech' element={<Home/>}/>
          <Route path='/repairs/' element={<Repairs/>}/>
          <Route path='/services/' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
       </ScrollToTop>
      </div>
      );
  }
}

export default App;
