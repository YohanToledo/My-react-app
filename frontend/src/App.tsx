import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from 'components/Navbar';
import RegraDeTres from 'components/RegraDeTres';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<RegraDeTres />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
