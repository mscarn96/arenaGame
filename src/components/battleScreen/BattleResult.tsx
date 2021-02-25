import styled from 'styled-components'

export interface ResultInfo {
    playerWon:boolean
    didLevelUp:boolean
    goldEarned?:number
    expGained?:number
}
interface Props {
    resultInfo:ResultInfo
    setVisible:React.Dispatch<React.SetStateAction<boolean>>
    gameOver:() => void
    deleteBattle:(champ:Champion) => void
    champ:Champion
    expForWin:number
    toggleBattle: React.Dispatch<React.SetStateAction<boolean>>
}

const BattleResultBackground = styled.div`
position:absolute;
background-color:black;
opacity:0.5;
top:0%;
bottom:0%;
left:0%;
right:0%;
z-index:1;
`

const BattleResultContainer = styled.div`
position: fixed;
background-color:blue;
opacity:1;
color:white;
width:70%;
height:45%;
transform: translate(-50%,-50%);
top: 50%;
left: 50%;
z-index:2;
`
const closeBattleAndSendInfoToStore = (setVisible:React.Dispatch<React.SetStateAction<boolean>>,
    champ:Champion,
    deleteBattle:(champ:Champion) => void,
    toggleBattle: React.Dispatch<React.SetStateAction<boolean>>,
    expForWin:number,
    gameOver:() => void
    ) => {
    if (champ.hp.currentHp > 0) {
        const champToReplace = { ...champ };
        champToReplace.exp = champ.exp + expForWin;
        deleteBattle(champToReplace);
        toggleBattle(false);
    } else {
        deleteBattle(champ);
        toggleBattle(false);
        gameOver();
    }

    setVisible(false)

}
const BattleResult = (props: Props) => {

    const {champ,deleteBattle,resultInfo,expForWin,gameOver,setVisible,toggleBattle} = props
    return (
        <>
        <BattleResultBackground />
        <BattleResultContainer>
            <h1>{resultInfo.playerWon ? `You Win! ` : `You Lose...`}</h1>
            {resultInfo.didLevelUp ? <h2>{`Level up! You're now level ${champ.level + 1}`}</h2> : null}
        <button onClick={() => closeBattleAndSendInfoToStore(
            setVisible,
            champ,
            deleteBattle,
            toggleBattle,
            expForWin,
            gameOver)}>End battle</button>
        </BattleResultContainer>
       </>
    )
}

export default BattleResult
