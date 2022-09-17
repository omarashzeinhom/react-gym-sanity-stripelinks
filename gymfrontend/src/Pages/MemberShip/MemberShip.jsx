import React from "react";
import { MemberShipCards } from "../../Components/index";

const MemberShip = () => {
  return (
    <div>
      <h2 className="text-dark text-center">
        Member<span className="text-info"> Ship</span>
      </h2>
      <MemberShipCards />
    </div>
  );
};

export default MemberShip;
