import React from 'react'

import styled from 'styled-components'

import { useSelector } from '../../redux/customHooks'
import ProgressBar from '../ui/ProgressBar';
import Items, {Item} from './Items';


const CharacterWrapper = styled.div`
width:50%;
display:flex;
flex-wrap:nowrap;
`


const EquipmentWrapper = styled.div`
width:50%;
`

const Character = () => {
    const champ = useSelector(state => state.champion.currentChamp)
    const inventory = useSelector(state => state.InventoryState)

    const Stats = () => {
        return (<div>
        <p>Level: {champ.level}</p>
        <p>Health points: {champ.hp.fullHp}</p>
        <p>Attack damage:{champ.attackDamage}</p>
        <p>Magic power:{champ.magicPower}</p>
        <p>Armor:{champ.armor}</p>
        <p>Magic Defence:{champ.magicDef}</p>
        <p>Dodge chance:{champ.dodgeChance}</p>
        <p>Block chance:{champ.blockChance}</p>
        <p>Critical hit chance:{champ.critChance}</p>
        <p>Accuracy:{champ.accuracy}</p>
        </div>)
    }

    const ChampionEquipment = () => {
        const {itemSlots} = champ;
        return (<EquipmentWrapper>
        <div>Head : {itemSlots.head ? <Item champ={champ} item={itemSlots.head} /> : 'EMPTY' }</div>
        <div>Body : {itemSlots.body ? <Item champ={champ} item={itemSlots.body} /> : 'EMPTY' }</div>
        <div>Legs : {itemSlots.feet ? <Item champ={champ} item={itemSlots.feet} /> : 'EMPTY' }</div>
        <div>Feet : {itemSlots.feet ? <Item champ={champ} item={itemSlots.feet} /> : 'EMPTY' }</div>
        <div>Neck : {itemSlots.neck ? <Item champ={champ} item={itemSlots.neck} /> : 'EMPTY' }</div>
        <div>Right hand : {itemSlots.rightHand ? <Item champ={champ} item={itemSlots.rightHand} /> : 'EMPTY' }</div>
        <div>Left hand : {itemSlots.leftHand ? <Item champ={champ} item={itemSlots.leftHand} /> : 'EMPTY' }</div>
        </EquipmentWrapper>)
    }


    return (
        <>
        <h1>{champ.name}</h1>
        <p>Level : {champ.level}</p>
        <ProgressBar width={40} bgcolor={"green"} current={champ.hp.currentHp ?? 0} total={champ.hp.fullHp ?? 0} />
        <CharacterWrapper>
            <ChampionEquipment />
            <Stats />
            <Items items={inventory.items} champ={champ}/>
        </CharacterWrapper>
        </>
    )
}

export default Character
