import React from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import '../assets/styles/typography.css'
import Flow from "./Flow";
import {Paper} from "@mui/material";
import Ellipse from "./nodesCards/Ellipse";

const MainPanel = () => {
  return (
    <div className={'container'}>
    <Paper className={'main-container'} elevation={4}>
      <div className={'up-panel'}>
        <span className={'title main-style'}>FlowChartName</span>
        <GetAppIcon/>
        <FileUploadIcon/>
      </div>
      <Paper className={'main-panel'} elevation={4}>
        <Flow />
      </Paper>
      <Paper className={'sideBar-container'} elevation={4}>
        <Ellipse/>
      </Paper>
    </Paper>
    </div>
  );
};

export default MainPanel;
