import React from "react";
import Homepage from "./homepage/Homepage.js";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoEffect from "./pages/NoEffect";

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const App = () => {
 return (
     <BrowserRouter>
         <Routes>
             <Route exact path='/' element={< Homepage />}></Route>
             <Route exact path='/noEffect' element={< NoEffect />}></Route>
         </Routes>
     </BrowserRouter>
 );
}
root.render(<App tab="home"/>);


