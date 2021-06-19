import React, { useState } from 'react'
import { colors } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CSVReader from 'react-csv-reader'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import BackupIcon from '@material-ui/icons/Backup';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import CsvDownloader from './CsvDownloader'

const useStyles = makeStyles((theme) => ({
    import: {
        position: 'fixed',
        bottom: theme.spacing(22),
        right: theme.spacing(2),
        // right: theme.spacing(2),
        // top: theme.spacing(14),
        
    },

    upload: {
      position: 'fixed',
      bottom: theme.spacing(22),
      right: theme.spacing(26),
      // right: theme.spacing(2),
      // top: theme.spacing(14),
      
  },
 
  }));


const CsvUploader = (prop) => {
    const classes = useStyles();
    const [file, setFile] = useState('');

    const upload = async (e) =>{
      e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

        try {
          const res = await axios.post('http://localhost:5000/api/employee', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
    
          });
          console.log('file uploaded')
          window.location = "http://localhost:3000/#/viewEmployees";
          
    
        } catch (err) {
          // if (err.response.status === 500) {
          //   console.log('There was a problem with the server');
          // } else {
          //   console.log(err.response.data.msg);
          // }
          console.log('something went wrong');
          
        }
        
    }

    const onChange = e => {
      const element = document.getElementById('import-csv-file')
      element.addEventListener('change', (event) => {
        setFile(event.target.files[0]);
        // console.log(event.target.files[0])
      });
 
    };
    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
      };

    return (

        <div   >
            
        <CSVReader 
        cssClass="react-csv-input"
        // label="Upload Employee Data"
        inputStyle={{display:'none'}}
        inputId='import-csv-file'
        parserOptions={papaparseOptions}
        onFileLoaded={(data, fileInfo) =>{
            prop.csv_data(data)
            // console.log(fileInfo)
        }
        }  />
        <label htmlFor="import-csv-file">
            <Button variant="contained" color="primary" onClick={onChange} component="span" className={classes.import} startIcon={<BackupIcon />}>
                 Import CSV			 
			      </Button>
     
        </label>
        <Button variant="contained" color="primary" onClick={upload} component="span" className={classes.upload} startIcon={<BackupIcon />}>
                 Upload CSV			 
			      </Button>
            <CsvDownloader/>
        </div>

      )
}
 
export default CsvUploader;