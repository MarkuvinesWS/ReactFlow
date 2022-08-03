import React, {useRef, useState} from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import '../assets/styles/typography.css'
import Flow from "./Flow";
import { IconButton, Paper, Tooltip } from "@mui/material";
import DocumentTitle from "./DocumentTitle";
import AvailableShapeCards from "./AvailableShapeCards";
import {saveAs} from 'file-saver';

const MainPanel = () => {
  function getFlowInstance(flowInstance) {
    setFlow(flowInstance);
  }

  function exportHandler() {
    let file = new File([JSON.stringify(toObject())], `${title}.rffc`)
    saveAs(file);
  }

  function inputChangeHandler(event) {
    setTitle(event.target.value);
  }

  const [{ toObject, setNodes, setEdges, setViewport }, setFlow] = useState({});
  const [title, setTitle] = useState('FlowChartName');
  const fileInput = useRef();
  return (
    <div className={'container'}>
      <Paper className={'main-container'} elevation={4}>
        <div className={'up-panel'}>
          <DocumentTitle title={title} titleChange={inputChangeHandler}/>
          <Tooltip title="import chart">
            <IconButton onClick={() => {
              fileInput.current.click();
            }}>
              <input onChange={() => {
                const file = fileInput.current.files[0];
               file.text().then(data => JSON.parse(data)).then((flow) => {
                  setNodes(flow.nodes);
                  setEdges(flow.edges);
                  setViewport(flow.viewport);
               })
                console.log(file) ;
              }} ref={fileInput} type="file" style={{"display": "none"}}/>
              <GetAppIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="export chart">
            <IconButton onClick={() => {
              exportHandler()
            }}>
              <FileUploadIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Paper className={'main-panel'} elevation={4}>
          <Flow getFlowInstance={getFlowInstance}/>
        </Paper>
        <Paper className={'sideBar-container'} elevation={4}>
          <AvailableShapeCards/>
        </Paper>
      </Paper>
    </div>
  );
};

export default MainPanel;
