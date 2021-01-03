import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import Tower from './Tower';
import Practice from './Practice';
import Market from './Market/Market'
import Tavern from './Tavern';
import Wild from './Wild';
import Arena from './Arena';



const Main = () => {
    return (
        <Router>
        <div>
            <ul>
                <li>
                    <Link to="tavern">tavern</Link>
                </li>
            </ul>
            
            
            
            
            
            <Switch>
            <Route path='/practice'>
                <Practice />
            </Route>
            <Route path='/market'>
                <Market />
            </Route>
	        <Route path='/tavern'>
                <Tavern />
            </Route>
	        <Route path='/wild'>
                <Wild />
            </Route>
	        <Route path='/arena'>
                <Arena />
            </Route>
	        <Route path='/tower'>
                <Tower />
            </Route>
    </Switch>
        </div>
        </Router>
    )
}

export default Main
