import React from "react";
import styled from "styled-components";
import { colors, ButtonStyles } from "../ui/globalStyles";

interface Props {
  name: string;
  handleNameChange:
    | ((event: React.ChangeEvent<HTMLInputElement>) => void)
    | undefined;
  handleSubmit: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined;
  classPicked: ChampClass;
  handleClassChange:
    | ((event: React.ChangeEvent<HTMLSelectElement>) => void)
    | undefined;
  isCharSelected: boolean;
}

const CreateCharContainer = styled.div`
  input {
    background-color: ${colors.darkBlue};
    border: 1px solid ${colors.lighterBlue};
    color: ${colors.white};
    font-family: "Redressed", serif;
    font-size: 1.2rem;
    border-radius: 5px;
  }
  form select {
    margin: 5px;
    background-color: ${colors.darkBlue};
    color: ${colors.lightBlue};
    font-family: "Redressed", serif;
    font-size: 1rem;
    border-radius: 5px;
  }
  form button {
    ${ButtonStyles};
    marginL5px;
    font-size: 1rem;
    font-family: "Cormorant Unicase",sans-serif;
  }
`;

const CreateChar = (props: Props) => {
  return (
    <CreateCharContainer>
      <h2>Character Name</h2>
      <input type="text" value={props.name} onChange={props.handleNameChange} />
      <h2>Choose Class</h2>
      <form onSubmit={props.handleSubmit}>
        <select value={props.classPicked} onChange={props.handleClassChange}>
          <option value="DEFAULT" hidden>
            Choose class
          </option>
          <option value={0}>Warrior</option>
          <option value={1}>Mage</option>
          <option value={2}>Hunter</option>
        </select>
        <button disabled={!props.isCharSelected} type="submit">
          {" "}
          Start Game
        </button>
      </form>
    </CreateCharContainer>
  );
};

export default CreateChar;
