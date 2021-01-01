import React from 'react';
import Learn from './Learn';
import Cards from './Cards';
import Chat from './Chat';
import Video from './Video';
import Home from './Home';
import { Switch,Route } from "react-router-dom";


function Main() {
    return (
        <div>
            <Switch>
            

            <Route path="/Learn">
             <Learn />
            </Route >

           <Route path="/Cards">
             <Cards />  
           </Route>
           
           <Route path="/Chat">
             <Chat />  
           </Route>
           
           <Route path="/Video">
             <Video />  
           </Route>

           
            <Route path="/">
             <Home />
            </Route >
            
            </Switch>
        </div>
    )
}

export default Main
