import React from "react";
import { arrMatches, arrWrong } from "./../Functions/index.js";
import { Progress } from "reactstrap";

const Score = ({ total, max, scorer }) => {
  const score = arrMatches(scorer);
  const wrong = arrWrong(scorer);
  return (
    <div>
      <div className="text-center">
        {score} of {max}
      </div>
      <Progress animated multi max={max} style={{ height: 40 }}>
        <Progress
          animated
          bar
          color="success"
          value={score}
          max={max}
        ></Progress>
        <Progress
          animated
          bar
          color="danger"
          value={wrong}
          max={max}
        ></Progress>
      </Progress>
    </div>
  );
};
export default Score;
