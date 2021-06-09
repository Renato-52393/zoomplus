import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Buttons from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

function Signin() {
  let history = useHistory();
  
  //alert
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  return (
    <div className={classes.paper}>
      <p>
        ZoomPlus
      </p>
      <Form>
        <Form.Group className={classes.form} controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className={classes.form} controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>

      <Buttons variant="outline-primary" color="primary" onClick={handleClickOpen}>
                Login
      </Buttons>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
                <Form><Form.Group className={classes.form} controlId="formBasicName">
                </Form.Group>
                </Form>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                    <div>
                        <p>Login efetuado com sucesso</p>
            </div>
                </DialogContent>
                <DialogActions>
                    <button onClick={() => {
                        history.push("/homepage");
                    }}
                    >OK
        </button>
                </DialogActions>
            </Dialog>
      <Button variant="outline-primary"
        onClick={() => {
          history.push("/signup");
        }}
      >Registar
     </Button>
    </div>
  );
}
export default Signin;