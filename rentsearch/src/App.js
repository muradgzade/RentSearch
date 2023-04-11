import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { router } from "./router";
import Scroltotop from "./Components/Scroltotop";




const App = () => {
  
  return (
    <>
     
<Scroltotop/>
       <Layout>
       <Routes>
          {
            router&&router.map((path)=>(
            <Route key={`path ${path.path}`} index element={path.component} path={path.path} />
            ))
          }

        </Routes>
       </Layout>

      

    </>

 
  );
};

export default App;
