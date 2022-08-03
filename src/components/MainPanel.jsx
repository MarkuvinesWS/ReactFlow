import React from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import '../assets/styles/typography.css'
import Flow from "./Flow";
import { IconButton, Paper, Tooltip } from "@mui/material";
import DocumentTitle from "./DocumentTitle";
import AvailableShapeCards from "./AvailableShapeCards";

const MainPanel = () => {

  return (
    <div className={'container'}>
    <Paper className={'main-container'} elevation={4}>
      <div className={'up-panel'}>
        <DocumentTitle/>
        <Tooltip title="import chart">
          <IconButton>
            <GetAppIcon/>
          </IconButton>
        </Tooltip>
        <FileUploadIcon/>
      </div>
      <Paper className={'main-panel'} elevation={4}>
        <Flow />
      </Paper>
      <Paper className={'sideBar-container'} elevation={4}>
        <AvailableShapeCards/>
      </Paper>
    </Paper>
    </div>
  );
};

export default MainPanel;
