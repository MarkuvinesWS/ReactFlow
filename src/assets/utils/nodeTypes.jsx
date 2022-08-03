import CustomNode from "../../components/customNode";

export const nodeTypes = {
  ellipse: () => <CustomNode nodeName={'ellipse'}/>,
  rectangle: () => <CustomNode nodeName={'rectangle'}/>,
  rhombus: () => <CustomNode nodeName={'rhombus'}/>,
  rectSections: () => <CustomNode nodeName={'rectSections'}/>,
  parallelogram: () => <CustomNode nodeName={'parallelogram'} handlesStyle={ {left: {left: 10}, right: {right: 10} }}/>,
  sixCorn: () => <CustomNode nodeName={'sixCorn'}/>,
  rectUp: () => <CustomNode nodeName={'rectUp'}/>,
};
