import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const FormDialog= ({open,input, handleChange, handleClickOpen, handleClose, addTodo}) => {
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        TODOを追加
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>TODOを入力してください</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id=""
            label="タスク名"
            fullWidth
            variant="standard"
						value={input}
						onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>戻る</Button>
          <Button onClick={addTodo}>登録</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;