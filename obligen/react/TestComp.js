import React from "react";

export default function TestComp() {
    const propsValue = 'Virker nå';
    return (
      <div className="App">
        <TestComp />
        <ComponentWithProp value={propsValue} />
      </div>
    );
  }
  
  const TestComp = () => {
    return <h1>Test Component</h1>;
  };
