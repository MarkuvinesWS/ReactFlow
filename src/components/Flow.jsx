import React, {useCallback} from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useEdgesState,
  useNodesState,
  addEdge, useReactFlow
} from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css'
import 'react-flow-renderer/dist/theme-default.css'
import { nodeTypes } from "../assets/utils/nodeTypes";
import {edgeTypes} from "../assets/utils/edgeTypes";

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { project } = useReactFlow();
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  function onDropHandler(event) {
    event.preventDefault();
    const nodeType = event.dataTransfer.getData('text')
    const nodesCopy = [...nodes];
    const newNode = {
      id: `${Math.random() * 10}`,
      type: `${nodeType}`,
      data: { innerText: '' },
      position: project({x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY}),
    }
    nodesCopy.push(newNode);
    setNodes(nodesCopy);
  }
  return (
    <ReactFlow
      onDragOver={(event) => {event.preventDefault()}}
      onDrop={onDropHandler}
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      edgeTypes={edgeTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <MiniMap />
      <Controls />
      <Background/>
    </ReactFlow>
  );
}

export default Flow;
