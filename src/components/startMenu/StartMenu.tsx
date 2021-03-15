import React, { useState } from "react";

import Help from "./Help";

import CreateChar from "./CreateChar";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { createChamp } from "../../redux/actions/champActionCreators";
import Main from "../main/Main";
import { useSelector } from "../../redux/customHooks";

import styled from "styled-components";
import { ButtonStyles } from "../ui/globalStyles";
import { toast } from "react-toastify";

const StartMenuWrapper = styled.div`
  div {
    display: grid;
    justify-items: center;
  }
  h1 {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const HelpButton = styled.button`
  ${ButtonStyles};
  position: fixed;
  margin: 5px;
  top: 0%;
  right: 0%;
  font-family: "Cormorant Unicase", sans-serif;
  font-size: 1.2rem;
`;

const StartMenu = () => {
  const [isHelpActive, setIsHelpActive] = useState<boolean>(false);
  const [isCharSelected, setIsCharSelected] = useState<boolean>(false);
  const [classPicked, setClassPicked] = useState<ChampClass>(-1);
  const [name, setName] = useState<string>("");
  const champ = useSelector((state) => state.champion.currentChamp);

  const dispatch = useDispatch();

  const handleHelpButton = () => {
    setIsHelpActive(!isHelpActive);
  };

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setClassPicked(Number(event.target.value));
    if (name.length > 2) {
      setIsCharSelected(true);
    } else {
      setIsCharSelected(false);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (name.length > 2 && classPicked !== -1) {
      setIsCharSelected(true);
    } else {
      setIsCharSelected(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isCharSelected) {
      dispatch(createChamp(name, classPicked));
    } else {
      if (name.length <= 3) {
        toast.error("Name must contain at least 3 characters");
      } else {
        toast.error("Please choose class!");
      }
    }
  };

  const checkChamp = () => (champ.champClass === -1 ? false : true);

  return (
    <Router>
      <Route exact path="/">
        {checkChamp() ? (
          <Main />
        ) : (
          <StartMenuWrapper>
            <h1>Create New Character</h1>
            <CreateChar
              name={name}
              handleNameChange={handleNameChange}
              handleSubmit={handleSubmit}
              classPicked={classPicked}
              handleClassChange={handleClassChange}
              isCharSelected={isCharSelected}
            />
            <HelpButton onClick={handleHelpButton}>Help</HelpButton>
            {isHelpActive ? <Help /> : null}
            {}
          </StartMenuWrapper>
        )}
      </Route>
    </Router>
  );
};

export default StartMenu;
