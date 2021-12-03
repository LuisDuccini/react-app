import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../Home/Home";
import Login from "../Login/Login";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Login }  path="/login" />
       </BrowserRouter>
   )
}

export default Routes;

