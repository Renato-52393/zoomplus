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

function JoinMeeting() {
    let history = useHistory();
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
            <p>Juntar a uma reunião!</p>
            <Form>
                <Form.Group className={classes.form} controlId="formBasicId">
                    <Form.Label>Id da Reunião</Form.Label>
                    <Form.Control type="email" placeholder="Insira o ID da reunião ou link" />
                </Form.Group>

                <Form.Group className={classes.form} controlId="formBasicName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="name" placeholder="Insira o seu nome" />
                </Form.Group>
            </Form>
            


            <Buttons variant="outlined" color="primary" onClick={handleClickOpen}>
                Juntar
      </Buttons>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Juntar a uma reunião"}</DialogTitle>
                <Form><Form.Group className={classes.form} controlId="formBasicName">
                </Form.Group>
                </Form>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                    <div>
                        <p>Juntando a reunião</p>
                        <input type="checkbox" /> Entrar com áudio
                        <input type="checkbox" /> Entrar com vídeo
            </div>
                </DialogContent>
                <DialogActions>
                    <button onClick={() => {
                        history.push("/meeting");
                    }}
                    >OK
        </button>
                </DialogActions>
            </Dialog>
            <Buttons variant="outlined" color="primary"
                onClick={() => {
                    history.push("/homepage");
                }}
            >Cancelar
     </Buttons>

        </div>
    );
}
export default JoinMeeting;