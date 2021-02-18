import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import styled from 'styled-components';


import Tower from './Tower';
import Practice from './Practice';
import Market from './Market/Market'
import Tavern from './Tavern';
import Wild from './Wild';
import Arena from './Arena';
import Character from './Character';

const Navigation = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-between;
margin:15px;
`




const Main = () => {
    return (
        <Router>
        <div>
            <Navigation>
                <li>
                    <Link to="character">character</Link>
                </li>
                <li>
                    <Link to="practice">practice</Link>
                </li>
                <li>
                    <Link to="market">market</Link>
                </li>
                <li>
                    <Link to="tavern">tavern</Link>
                </li>
                <li>
                    <Link to="wild">wild</Link>
                </li>
                <li>
                    <Link to="arena">arena</Link>
                </li>
                <li>
                    <Link to="tower">tower</Link>
                </li>
            </Navigation>
            
            <Switch>
            <Route path='/character'>
                <Character />
            </Route>
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
