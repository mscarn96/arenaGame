import {useState} from 'react'
import {Dispatch} from 'redux'
import { useDispatch } from 'react-redux'
import { useSelector } from '../../redux/customHooks'
import { basicAttack } from '../../game/battle';
import {consumeResource, damageEnemy} from '../../redux/actions/battleActionCreators'

type Props = {
    isPlayerTurn:boolean
    setIsPlayerTurn:React.Dispatch<React.SetStateAction<boolean>>
}

const UseSkill = (
    champ:Champion,
    enemy:Enemy,
    skill:Skill,
    dispatch:Dispatch<any>,
    setAttackResultText: React.Dispatch<React.SetStateAction<string>>,
    setIsPlayerTurn:React.Dispatch<React.SetStateAction<boolean>>):void => {
        if (skill.type === `DAMAGE`){
            const skillResult = skill.effect(champ,enemy)
            setAttackResultText(skillResult.statusText)
            dispatch(damageEnemy(skillResult.damage))
            dispatch(consumeResource(skill.cost))
            setIsPlayerTurn(false)
        } else {
            const skillResult = skill.effect(champ,enemy)
            setAttackResultText(skillResult.statusText)
            ///REDUCER??? zrobić funkcjonalnosc spelli oslabiajacych
            setIsPlayerTurn(false)
        }


    } 

const Moves = (props:Props) => {
    const dispatch = useDispatch();
    const champ = useSelector(state => state.battleState.champ)
    const enemy = useSelector(state => state.battleState.enemy)
    const skillset = champ.skillset;
    const [attackResultText,setAttackResultText] = useState('');

    const attack = () => {
        if (enemy !== undefined) {
            const attackResult = basicAttack(champ,enemy)
            setAttackResultText(attackResult.statusText)
            dispatch(damageEnemy(attackResult.damage))
            props.setIsPlayerTurn(false)
        } else console.warn("No Enemy!")
        
    }
    return (
        <div>
            <p>{attackResultText}</p>
            <button disabled={!props.isPlayerTurn} onClick={() => attack()}>Basic Attack</button>
            {skillset.map(skill => <button key={skill.id} disabled={champ.res.current < skill.cost} onClick={() => UseSkill(
                champ,enemy,skill,dispatch,setAttackResultText,props.setIsPlayerTurn)}>{skill.name}</button>
            )}
        </div>
    )
}

export default Moves
