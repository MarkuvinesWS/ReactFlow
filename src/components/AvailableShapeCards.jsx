import React from 'react';
import NodeCard from "./NodeCard";

const dict = [
  "ellipse",
  "rectangle",
  "rhombus",
  "rectSections",
  "parallelogram",
  "sixCorn",
  "rectUp",
  "rectDown",
  "circle",
]

const AvailableShapeCards = () => {

  return (
    <>
    {dict.map((name, index) => <NodeCard key={name + index} shape={name}/> )}
    </>
  )
};

export default AvailableShapeCards;
