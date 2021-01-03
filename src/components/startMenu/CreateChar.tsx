import React from 'react'

interface Props {
    name:string
    handleNameChange:((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
    handleSubmit:((event: React.FormEvent<HTMLFormElement>) => void) | undefined
    classPicked:ChampClass
    handleClassChange:((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined
    isCharSelected:boolean
}

const CreateChar = (props:Props) => {
    
    return (
        <div>
            <h2>Character Name</h2>
            <input type="text" value={props.name} onChange={props.handleNameChange}/>
            <h2>Choose Class</h2>
            <form onSubmit={props.handleSubmit}>
                <select
                value={props.classPicked}
                onChange={props.handleClassChange} >
                    <option value="DEFAULT" hidden>Choose class</option>
                    <option value={0}>Warrior</option>
                    <option value={1}>Mage</option>
                    <option value={2}>Hunter</option>
                </select>
                <button disabled={!props.isCharSelected} type="submit"> Start Game</button>
            </form>
        </div>
    )
}

export default CreateChar;

