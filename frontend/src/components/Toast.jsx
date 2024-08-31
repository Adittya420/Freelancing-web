import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function SimpleSnackbar({open, onClose, message}) {  
  
  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={onClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
          
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
        message={message}
        action={action}
      />
    
  );
}
