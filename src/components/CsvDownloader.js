import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


const useStyles = makeStyles((theme) => ({
    upload: {
        position: 'fixed',
        bottom: theme.spacing(22),
        right: theme.spacing(50),
        
        // right: theme.spacing(2),
        // top: theme.spacing(14),
        
    },
 
  }));

const CsvDownloader = () =>{
    const headers = [
        { label: "Id", key: "id" },
        { label: "Name", key: "name" },
        { label: "Age", key: "age" },
        { label: "Date of birth", key: "dob" },
        { label: "Reporting Manager", key: "rm" },
        { label: "Salary", key: "slr" },
        { label: "Department", key: "dpt" }
      ];
       
      const data = [
        { id: "1", name: "Javed", age: "javedaktar73@gmail.com",  dob: "31/5/1965", rm: "Jd",slr: "20",dpt: "CSE",age: "50"}
      ];
      const classes = useStyles();
      return(

        <div   >

 
            <label htmlFor="file">

            <Button variant="contained" color="primary" component="span" className={classes.upload} startIcon={<CloudDownloadIcon />}>
            <a style={{color:'white'}} href="sample.csv" download="sample.csv">Sample CSV</a>
			      </Button>
     
        </label>
        </div>


      )
      
}

export default CsvDownloader