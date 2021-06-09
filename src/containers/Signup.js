import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Buttons from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: 'auto',
        width: '50%',
        marginTop: theme.spacing(8),
        display: 'flexbox',
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        alignSelf: 'center',
        marginTop: theme.spacing(3),
    },
    form2: {
        width: '50%', // Fix IE 11 issue.
        alignSelf: 'center',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Signup() {
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

            <Form >
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className={classes.form} controlId="formBasicEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="fname" placeholder="First Name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className={classes.form} controlId="formBasicPassword">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="lname" placeholder="Last Name" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>

            <Form>
                <Form.Group className={classes.form} controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className={classes.form} controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className={classes.form} controlId="formBasicPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
          
            <Buttons variant="outlined" color="primary" onClick={handleClickOpen}>
                Registar
      </Buttons>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Registar"}</DialogTitle>
                <Form><Form.Group className={classes.form} controlId="formBasicName">
                </Form.Group>
                </Form>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                    <div>
                        <p>Utilizador criado com sucesso</p>
            </div>
                </DialogContent>
                <DialogActions>
                    <button onClick={() => {
                        history.push("/signin");
                    }}
                    >OK
        </button>
                </DialogActions>
            </Dialog>
     
        </div>
    );
}
export default Signup;