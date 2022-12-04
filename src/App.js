import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import React, { Component }  from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Servec from './Servec';
import Contect from './Contect';
import Navbar from './Navbar';



const App=()=>{

   

    return (
        <>

        
        <Navbar/>
    
        <Switch>
       <Route exact path="/" component={Home}/> 
       <Route exact path="/About" component={About}/> 
       <Route exact path="/Contect" component={Contect}/> 
       <Route exact path="/Servec" component={Servec}/> 
       <Redirect to="/"/>
       </Switch>     
        </>
    );
};
export default App