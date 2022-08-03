import React, {useCallback, useRef} from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useEdgesState,
  useNodesState,
  addEdge
} from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css'
import 'react-flow-renderer/dist/theme-default.css'
import { nodeTypes } from "../assets/utils/nodeTypes";

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const id = useRef(1);
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  return (
    <ReactFlow
      onDragOver={(event) => {event.preventDefault()}}
      onDrop={(event) => {
        event.preventDefault();
        const nodeType = event.dataTransfer.getData('text')
        const nodesCopy = [...nodes];
        const newNode = {
          id: `${id.current++}`,
          type: `${nodeType}`,
          data: { label: 'Main' },
          position: { x: 250, y: 250 },
        }

        nodesCopy.push(newNode);
        setNodes(nodesCopy);
      }}
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
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
