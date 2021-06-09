import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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
  const classes = useStyles();

  return (
    <div className={classes.paper}>
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

      <Button className={classes.submit}
        onClick={() => {
          history.push("/homepage");
        }}
      >Login
     </Button>
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