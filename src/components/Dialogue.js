import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom'


export default function AlertDialog(prop) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    prop.toggleDialogue(false)
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={prop.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{color:'green'}} id="alert-dialog-title">{"File Uploaded Successfully"}</DialogTitle>
 
        <DialogActions>
          <Button onClick={handleClose} color="primary" component={Link} to="/viewEmployees" autoFocus>
            View Employees List
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
