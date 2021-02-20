import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch } from 'react-router-dom';
import styled from 'styled-components';

import ArmorShop from './ArmorShop'
import WeaponShop from './WeaponShop'
import UseablesShop from './WeaponShop'

const Navigation = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-between;
margin:15px;
`


const Market = () => {
    return (
        <Router>
        <div>
            <Navigation>
                <li>
                    <Link to="armorShop">Armor Shop</Link>
                </li>
                <li>
                    <Link to="weaponShop">Weapon Shop</Link>
                </li>
                <li>
                    <Link to="useablesShop">Useables Shop</Link>
                </li>
            </Navigation>

            <Switch>
                <Route path='/armorShop'>
                    <ArmorShop />
                </Route>
                <Route path='/weaponShop'>
                    <WeaponShop />
                </Route>
                <Route path='/useablesShop'>
                    <UseablesShop />
                </Route>
            </Switch>  
        </div>
        </Router>
    )
}

export default Market
