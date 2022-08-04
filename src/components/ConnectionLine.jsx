import React from 'react';

export default ({
                  sourceX,
                  sourceY,
                  sourcePosition,
                  targetX,
                  targetY,
                  targetPosition,
                  connectionLineType,
                  connectionLineStyle,
                }) => {
  return (
    <g>
      <path
        fill="none"
        stroke="#222"
        strokeWidth={3}
        d={`M${sourceX},${sourceY} C ${sourceX} ${targetY} ${sourceX} ${targetY} ${targetX},${targetY}`}
      />
    </g>
  );
};

