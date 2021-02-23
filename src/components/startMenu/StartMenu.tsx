import React, {useState} from 'react';

import Help from "./Help"

import CreateChar from "./CreateChar"

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { createChamp } from '../../redux/actions/champActionCreators'
import Main from '../main/Main';
import { useSelector } from '../../redux/customHooks';


const StartMenu = () => {
    const [isHelpActive,setIsHelpActive] = useState<boolean>(false);
    const [isCharSelected,setIsCharSelected] = useState<boolean>(false);
    const [classPicked, setClassPicked] = useState<ChampClass>(-1);
    const [name, setName] = useState<string>("");
    const champ = useSelector(state => state.champion.currentChamp)

    const dispatch = useDispatch();

    const handleHelpButton = () => {
        setIsHelpActive(!isHelpActive);
    }

    const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setClassPicked(Number(event.target.value));
        if (name.length > 3) {setIsCharSelected(true)} else {setIsCharSelected(false)};
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        if (name.length > 3 && classPicked !== -1) {setIsCharSelected(true)} else {setIsCharSelected(false)};
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(createChamp(name, classPicked));
    }

    const checkChamp = () => champ.champClass === -1 ? false : true
        

    
    return (
        <Router>
        <Route exact path="/">
        {checkChamp() ?
         <Main/>
          : <div>
          <CreateChar name={name}
          handleNameChange={handleNameChange}
          handleSubmit={handleSubmit}
          classPicked={classPicked}
          handleClassChange={handleClassChange}
          isCharSelected={isCharSelected}/>
          <button onClick={handleHelpButton}>Help</button>
          { isHelpActive ? <Help /> : null}
      </div>}
        </Route>
        </Router>

    )}

export default StartMenu
