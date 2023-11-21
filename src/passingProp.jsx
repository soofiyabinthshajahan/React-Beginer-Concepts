import React from "react";
import PassedPropDIsplay from "./passedPropDIsplay";



const PassingProp = () => {
  const passingMessage1 = "sentence 1 from passingprop ";
  const passingMessage2 = "sentence 2 from passingProp";
  const passingMessage3 ="sentence 3 from passingProp"

  return (
    <div>
      <div className="greeting-card">
        <h2>Greeting Card</h2>
        <PassedPropDIsplay message = {passingMessage1}/>
        <PassedPropDIsplay message = {passingMessage2}/>
        <PassedPropDIsplay message = {passingMessage3}/>
      

      </div>
    </div>
  );
};

export default PassingProp;
