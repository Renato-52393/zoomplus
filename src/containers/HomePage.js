import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Form from 'react-bootstrap/Form';
import Buttons from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//css
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

function HomePage() {
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
        <div>
            <p>Bem vindo ao ZOOMPLUS!</p>
            <Buttons variant="outlined" color="primary" onClick={handleClickOpen}>
                Criar Reunião
            </Buttons>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description11"
            >
                <DialogTitle id="alert-dialog-title">{"Criar reunião"}</DialogTitle>
                <Form><Form.Group className={classes.form} controlId="formBasicName">
                </Form.Group>
                </Form>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                    <div>
                        <input type="checkbox" /> Entrar com áudio
                    </div>
                </DialogContent>
                <DialogActions>
                    <button onClick={() => {
                        history.push("/meeting");
                        console.log('Reunião criada!');
                    }}
                    >Criar
                    </button>
                </DialogActions>
            </Dialog>

            <Buttons variant="outlined" color="primary" onClick={() => {
                history.push("/join-meeting");
            }}
            >Juntar a Reuniao
            </Buttons>
            <Buttons variant="outlined" color="primary" onClick={() => {
                history.push("/schedule-meeting");
            }}
            >Agendar Reuniao
            </Buttons>
            <Buttons variant="outlined" color="primary" onClick={() => {
                history.push("/posteditor");
            }}
            >Forum
            </Buttons>


            <Buttons variant="outlined" color="primary" onClick={() => {
                history.push("/channel");
            }}
            >Canais
            </Buttons>
        </div>

    );
}
export default HomePage;