import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from 'components/Navbar';
import RegraDeTres from 'components/RegraDeTres';
import Users from 'components/Users';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<RegraDeTres />}/>
          <Route path="/users" element={<Users />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
