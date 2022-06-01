import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

import "./Modal.css";

export default function BasicModal({ image,  title, price, stock}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="container-modal">
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="box-modal">
          <ItemDetailContainer image={image}  title={title} price={price} stock={stock} />
          
        </Box>
      </Modal>
    </div>
  );
}
