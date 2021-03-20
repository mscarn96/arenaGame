import React from "react";
import styled from "styled-components";

import ProgressBar from "../ui/ProgressBar";

type Props = {
  enemy: Enemy;
  attackResult: string;
};

const EnemyContainer = styled.div`
  img {
    max-width: 200px;
  }
`;

const Enemy = (props: Props) => {
  const { enemy, attackResult } = props;
  return (
    <EnemyContainer>
      <h3>{enemy?.name}</h3>
      <p>Level : {enemy?.level}</p>
      <img src={enemy.image} alt={`img of ${enemy.name}`} />
      <ProgressBar
        width={100}
        bgcolor={"green"}
        current={enemy?.hp.currentHp ?? 0}
        total={enemy?.hp.fullHp ?? 0}
      />
      <p>{attackResult}</p>
    </EnemyContainer>
  );
};

export default Enemy;
