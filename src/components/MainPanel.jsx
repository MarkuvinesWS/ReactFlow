import React, {useState} from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import '../assets/styles/typography.css'
import Flow from "./Flow";
import {IconButton, Paper, Tooltip} from "@mui/material";
import DocumentTitle from "./DocumentTitle";
import AvailableShapeCards from "./AvailableShapeCards";
import {saveAs} from 'file-saver';

const MainPanel = () => {
  function getFlowInstance(flowInstance) {
    setFlow(flowInstance);
  }

  function exportHandler() {
    let file = new File([JSON.stringify(flow.toObject())], `${title}.rffc`)
    saveAs(file);
  }

  function inputChangeHandler(event) {
    setTitle(event.target.value);
  }

  const [flow, setFlow] = useState();
  const [title, setTitle] = useState('FlowChartName');

  return (
    <div className={'container'}>
      <Paper className={'main-container'} elevation={4}>
        <div className={'up-panel'}>
          <DocumentTitle title={title} titleChange={inputChangeHandler}/>
          <Tooltip title="import chart">
            <IconButton>
              <GetAppIcon onClick={() => {
                exportHandler()
              }}/>
            </IconButton>
          </Tooltip>
          <FileUploadIcon/>
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
