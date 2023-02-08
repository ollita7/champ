import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, Typography } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import './styles.scss';
export interface IConfirmationModalProps {
  title: string,
  text: string,
  open: boolean,
  confirmation: any,
  cancel:any
}

const ConfirmationModal: React.FC<IConfirmationModalProps> = ({ title, text, open, confirmation,cancel, ...props }): ReactElement => {

  const [openModal, setOpenModal] = useState(open);

  const handleCancel = () => {
    cancel();
  };

  const handleConfirmation = () => {
    confirmation();
  }

  useEffect(() => {
    setOpenModal(open)
  }, [open]);


  return (

    <Dialog
      open={openModal}
      onClose={handleCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
      {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCancel}>Disagree</Button>
        <Button onClick={handleConfirmation} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default (ConfirmationModal);
