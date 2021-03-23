import styled from "styled-components";
import { colors } from "../../game/ui/globalStyles";

interface Props {
  resultInfo: ResultInfo;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  gameOver: () => void;
  deleteBattle: (champ: Champion) => void;
  champ: Champion;
  expForWin: number;
  toggleBattle: React.Dispatch<React.SetStateAction<boolean>>;
}

const BattleResultBackground = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.5;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  z-index: 1;
`;

const BattleResultContainer = styled.div`
  position: fixed;
  background-color: black;
  opacity: 0.9;
  color: white;
  width: 90%;
  height: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 2;

  h1 {
    text-align: center;
    font-size: 1.8rem;
    margin: 40px 25px;
  }

  h3 {
    text-align: center;
    font-size: 1.2rem;
    margin: 30px 20px;
  }

  button {
    font-family: "Cormorant Unicase", sans-serif;
    font-size: 1rem;
    position: absolute;
    bottom: 25%;
    left: 50%;
    transform: translateX(-50%);
    color: ${colors.white};
    background-color: ${colors.darkBlue};
    border: 1px solid ${colors.white};
    border-radius: 5px;
  }
`;
const closeBattleAndSendInfoToStore = (
  setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  champ: Champion,
  deleteBattle: (champ: Champion) => void,
  toggleBattle: React.Dispatch<React.SetStateAction<boolean>>,
  expForWin: number,
  gameOver: () => void
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

  setVisible(false);
};
const BattleResult = (props: Props) => {
  const {
    champ,
    deleteBattle,
    resultInfo,
    expForWin,
    gameOver,
    setVisible,
    toggleBattle,
  } = props;
  return (
    <>
      <BattleResultBackground />
      <BattleResultContainer>
        <h1>{resultInfo.playerWon ? `You Win! ` : `You Lose. Game Over`}</h1>
        {resultInfo.didLevelUp ? (
          <h2>{`Level up! You're now level ${champ.level + 1}`}</h2>
        ) : null}
        {resultInfo.goldEarned ? (
          <h3>{`You earned ${resultInfo.goldEarned} gold from win.`}</h3>
        ) : null}
        <button
          onClick={() =>
            closeBattleAndSendInfoToStore(
              setVisible,
              champ,
              deleteBattle,
              toggleBattle,
              expForWin,
              gameOver
            )
          }
        >
          {resultInfo.playerWon ? `End battle` : `Go to main menu`}
        </button>
      </BattleResultContainer>
    </>
  );
};

export default BattleResult;
