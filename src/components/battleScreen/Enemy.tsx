import React from "react";
import styled from "styled-components";
import { colors } from "../../game/ui/globalStyles";

import ProgressBar from "../ui/ProgressBar";

type Props = {
  enemy: Enemy;
  attackResult: string;
};

const EnemyContainer = styled.div`
  h3,
  p {
    margin: 10px;
    text-align: center;
  }
  h3 {
    height: 50px;
  }
  .imageEnemy {
    position: relative;
    margin: 5px;
    display: flex;
    justify-content: center;
  }
  .imageEnemy img {
    max-width: 100px;
    height: 150px;
    border: 2px solid ${colors.lightBlue};
    border-radius: 5px;
  }
  .imageEnemy span {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    font-family: sans-serif;
    font-size: 0.5rem;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .bars {
    display: flex;
    flex-direction: column;
  }
`;

const Enemy = (props: Props) => {
  const { enemy } = props;
  return (
    <EnemyContainer>
      <h3>{enemy?.name}</h3>
      <p>Level : {enemy?.level}</p>
      <div className={`imageEnemy`}>
        <img src={enemy.image} alt={`img of ${enemy.name}`} />
        {enemy.imgCred ? <span>Image by {enemy.imgCred}</span> : null}
      </div>
      <p>Level : {enemy.level}</p>
      <div className={`bars`}>
        <ProgressBar
          width={80}
          bgcolor={"green"}
          current={enemy?.hp.currentHp ?? 0}
          total={enemy?.hp.fullHp ?? 0}
        />
      </div>
    </EnemyContainer>
  );
};

export default Enemy;
