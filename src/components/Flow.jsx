import React, { useRef } from 'react';
import ReactFlow, {MiniMap, Controls, Background, useEdgesState, useNodesState} from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css'
import 'react-flow-renderer/dist/theme-default.css'
import EllipseNode from "./customNodes/Ellipse";

const nodeTypes = { ellipse: EllipseNode };

// const initialNodes = [
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'Input Node' },
//     position: { x: 250, y: 25 },
//   },
//
//   // {
//   //   id: '2',
//   //   // you can also pass a React component as a label
//   //   data: { label: <div>Default Node</div> },
//   //   position: { x: 100, y: 125 },
//   // },
//   {
//     id: '3',
//     type: 'output',
//     data: { label: 'Output Node' },
//     position: { x: 250, y: 250 },
//   },
//   {
//     id: '4',
//     type: 'ellipse',
//     data: { label: 'Output Node' },
//     position: { x: 300, y: 250 },
//   },
// ];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const id = useRef(1);
  return (
    <ReactFlow
      onDragOver={(event) => {event.preventDefault()}}
      onDrop={(event) => {
        event.preventDefault();
        const nodesCopy = [...nodes];
        const newNode = {
          id: `${id.current++}`,
          type: 'ellipse',
          data: { label: 'Output Node' },
          position: { x: 250, y: 250 },
        }
        nodesCopy.push(newNode);
        setNodes(nodesCopy);
      }}
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      fitView
    >
      <MiniMap />
      <Controls />
      <Background/>
    </ReactFlow>
  );
}

export default Flow;
