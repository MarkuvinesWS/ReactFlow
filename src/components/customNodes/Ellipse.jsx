import { Handle, Position } from 'react-flow-renderer/nocss';
import '../../assets/styles/nodes.css'

function EllipseNode() {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Bottom} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
      <div className={'ellipse'}>
        {/*<label htmlFor="text">Text:</label>*/}
        {/*<input id="text" name="text" />*/}
        Ellipse
      </div>
    </>
  );
}

export default EllipseNode;
