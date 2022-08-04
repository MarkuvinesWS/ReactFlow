import CustomNode from "../../components/customNode";

export const nodeTypes = {
  ellipse: (data) => <CustomNode {...data}/>,
  rectangle: (data) => <CustomNode {...data}/>,
  rhombus: (data) => <CustomNode {...data}/>,
  rectSections: (data) => <CustomNode {...data}/>,
  parallelogram: (data) => <CustomNode {...data} handlesStyle={ {left: {left: 10}, right: {right: 10} }}/>,
  sixCorn: (data) => <CustomNode {...data}/>,
  rectUp: (data) => <CustomNode {...data}/>,
  rectDown: (data) => <CustomNode {...data}/>,
  circle: (data) => <CustomNode {...data} handlesStyle={{left: {left: 37}, right: {right: 37} }}/>,
};
