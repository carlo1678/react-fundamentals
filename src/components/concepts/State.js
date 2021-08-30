import React, { useState } from "react";

const State = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <ul>
          <dt>useState is Unique to Functional Components</dt>
          <dd>
            Class components have a separate means of using and changing state.
          </dd>
          <dt>useState Uses Array Destructuring</dt>
          <dd>useState proves a state variable and a setState function</dd>
          <dt>useState is a Hook</dt>
          <dd>useState is a hook baked into React</dd>
          <dt>Triggers Re-Renders</dt>
          <dd>
            Like with props changes, changing the state of a componenet
            re-renders the whole component.
          </dd>
        </ul>
      </div>
    </div>
  );
};

export default State;
