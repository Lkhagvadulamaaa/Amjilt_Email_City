import React from "react";
import Home from "./container/home/home";
import Test from "./container/home/test/test";
import Suurin from "./components/suurin_computer/suurin";
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Admin_Home_Banner from "./admin/src/pages/home_banner/home_banner"; 

function App() {
  return (
    <div>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Test/>}/>
          <Route path="/suurin" element={<Suurin/>}/>
          <Route path="/admin/home_banner" element={<Admin_Home_Banner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
