import React from 'react';
import { Paper } from "@mui/material";

const NodeCard = ({ shape }) => {

  function onDragStartHandler( event ) {
    event.dataTransfer.setData('text', `${ shape }`);
    event.dataTransfer.setData('xPos', `${ event.nativeEvent.offsetX }`);
    event.dataTransfer.setData('yPos', `${ event.nativeEvent.offsetY }`);
  }

  return (
    <Paper className={'node-card-container'} elevation={4}>
      <div className={`node ${ shape }`} onDragStart={onDragStartHandler} draggable />
    </Paper>
  );
};

export default NodeCard;
