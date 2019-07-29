import React from "react";
import { Progress } from "reactstrap";

const Score = ({ total, max }) => (
  <div>
    <div className="text-center">
      {total || max} of {max}
    </div>
    <Progress animated color="success" value={total || max} max={max} />
  </div>
);

export default Score;
