import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CSVReader from "react-csv-reader";
import BackupIcon from "@material-ui/icons/Backup";
import { makeStyles } from "@material-ui/core/styles";
import CsvDownloader from "./CsvDownloader";
import { uploadCsv } from "../actions/employeeAction";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AlertDialog from  './Dialogue'

const useStyles = makeStyles((theme) => ({
  import: {
    position: "fixed",
    bottom: theme.spacing(22),
    right: theme.spacing(2),
  },

  upload: {
    position: "fixed",
    bottom: theme.spacing(22),
    right: theme.spacing(26),
  },
}));

const CsvUploader = (prop) => {
  const dispatch = useDispatch();
  // var uploadStatus = useSelector((state) => state.employeeReducer.uploadStatus);

  const classes = useStyles();
  const [file, setFile] = useState("");
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const toggleDialogue = (value) =>{
    setOpen(value)
  }

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    dispatch(uploadCsv(formData));
    setTimeout(()=>setOpen(true),1000)
    
  };

  const onChange = (e) => {
    const element = document.getElementById("import-csv-file");
    element.addEventListener("change", (event) => {
      setFile(event.target.files[0]);
    });
  };
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };

  return (
    <div>
      <AlertDialog open={open} toggleDialogue={toggleDialogue}/>
      <CSVReader
        cssClass="react-csv-input"
        inputStyle={{ display: "none" }}
        inputId="import-csv-file"
        parserOptions={papaparseOptions}
        onFileLoaded={(data, fileInfo) => {
          prop.csv_data(data);
        }}
      />
      <label htmlFor="import-csv-file">
        <Button
          variant="contained"
          color="primary"
          onClick={onChange}
          component="span"
          className={classes.import}
          startIcon={<BackupIcon />}
        >
          Import CSV
        </Button>
      </label>
      <Button
        variant="contained"
        color="primary"
        onClick={upload}
        component="span"
        className={classes.upload}
        startIcon={<BackupIcon />}
      >
        Upload CSV
      </Button>
      <CsvDownloader />
    </div>
  );
};

export default CsvUploader;
