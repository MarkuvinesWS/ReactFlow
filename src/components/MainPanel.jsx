import React, {useRef, useState} from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import '../assets/styles/typography.css'
import Flow from "./Flow";
import {IconButton, Paper, Tooltip} from "@mui/material";
import DocumentTitle from "./DocumentTitle";
import AvailableShapeCards from "./AvailableShapeCards";
import {saveAs} from 'file-saver';
import ModalWindow from "./ModalWindow";
import {useReactFlow} from "react-flow-renderer/nocss";

const MainPanel = () => {
  const [title, setTitle] = useState('FlowChartName');
  const [modal, setModal] = useState(false)
  const fileInput = useRef();
  const {toObject, setNodes, setEdges, setViewport, getNodes} = useReactFlow();

  function exportHandler() {
    let file = new File([JSON.stringify(toObject())], `${title}.rffc`)
    saveAs(file);
  }

  function inputChangeHandler(event) {
    setTitle(event.target.value);
  }

  function fileImportHandler() {
    const file = fileInput.current.files[0];
    file.text().then(json => JSON.parse(json)).then((data) => {
      setModal(false);
      setNodes(data.nodes);
      setEdges(data.edges);
      setViewport(data.viewport);
    })
  }
  function importButtonHandler() {
    if (!getNodes().length) {
      fileInput.current.click();
      return;
    }
    setModal(true);

  }

  return (
    <div className={'container'}>
      {modal && <ModalWindow fileInput={fileInput} setModal={setModal}/>}
      <Paper className={'main-container'} elevation={4}>
        <div className={'up-panel'}>
          <DocumentTitle title={title} titleChange={inputChangeHandler}/>
          <Tooltip title="import chart">
            <IconButton onClick={importButtonHandler}>
              <input onChange={fileImportHandler} ref={fileInput} type="file" style={{"display": "none"}}/>
              <GetAppIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title="export chart">
            <IconButton onClick={exportHandler}>
              <FileUploadIcon/>
            </IconButton>
          </Tooltip>
        </div>
        <Paper className={'main-panel'} elevation={4}>
          <Flow/>
        </Paper>
        <Paper className={'sideBar-container'} elevation={4}>
          <AvailableShapeCards/>
        </Paper>
      </Paper>
    </div>
  );
};

export default MainPanel;
