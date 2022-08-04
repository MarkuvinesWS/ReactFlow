import React from 'react';
import {getBezierPath} from "react-flow-renderer/nocss";

const CustomEdge = ({ id,
                      sourceX,
                      sourceY,
                      targetX,
                      targetY,
                      sourcePosition,
                      targetPosition,
                      style = {strokeWidth: 3, stroke: 'black'},
                      data,
                      markerEnd,}) => {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  return (
    <path
      style={style}
      className="react-flow__edge-path"
      d={edgePath}
      markerEnd={markerEnd}
    />
  );
};

export default CustomEdge;
