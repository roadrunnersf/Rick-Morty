import React from "react";
import { arrMatches } from "./../Functions/index.js";
import { Progress } from "reactstrap";

const Score = ({ total, max, scorer }) => {
  return (
    <div>
      <div className="text-center">
        {arrMatches(scorer)} of {max}
      </div>
      <Progress animated color="success" value={total || max} max={max} />
    </div>
  );
};
export default Score;
