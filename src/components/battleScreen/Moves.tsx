import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from '../../redux/customHooks'
import { basicAttack } from '../../game/battle';
import {damageEnemy} from '../../redux/actions/battleActionCreators'

type Props = {
    isPlayerTurn:boolean
    setIsPlayerTurn:React.Dispatch<React.SetStateAction<boolean>>
}

const Moves = (props:Props) => {
    const dispatch = useDispatch();
    const champ = useSelector(state => state.battleState.champ)
    const enemy = useSelector(state => state.battleState.enemy)
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
        </div>
    )
}

export default Moves
