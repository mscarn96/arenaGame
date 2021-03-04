import React from "react";

import ProgressBar from "../ui/ProgressBar";

type Props = {
  enemy: Enemy;
  attackResult: string;
};

const Enemy = (props: Props) => {
  const { enemy, attackResult } = props;
  return (
    <div>
      <h3>{enemy?.name}</h3>
      <p>Level : {enemy?.level}</p>
      <ProgressBar
        width={100}
        bgcolor={"green"}
        current={enemy?.hp.currentHp ?? 0}
        total={enemy?.hp.fullHp ?? 0}
      />
      <p>{attackResult}</p>
    </div>
  );
};

export default Enemy;
