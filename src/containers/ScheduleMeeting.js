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

function ScheduleMeeting() {
    /* const localData: EventSettingsModel = {
         dataSource:[{
             EndTime: new Date(2021,0,11,6,30),
             StartTime new Date(2021,0,11,4,0)
         }]
     }*/
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
            <p>Agendar uma reunião!</p>
            <Form>
                <Form.Group className={classes.form} controlId="formBasicSchedule">
                    <Form.Label>Tópico</Form.Label>
                    <Form.Control type="topic" placeholder="Zoomplus meeting" />
                </Form.Group>

                <Form.Group className={classes.form} controlId="formBasicStart">
                    <Form.Label>Início</Form.Label>
                    <Form.Control type="start" placeholder="Inserir data e hora de início" />
                </Form.Group>
                <Form.Group className={classes.form} controlId="formBasicDuration">
                    <Form.Label>Duração</Form.Label>
                    <Form.Control type="duration" placeholder="Inserir duração" />
                </Form.Group>
            </Form>
            <Buttons variant="outlined" color="primary" onClick={handleClickOpen}>
                Agendar
      </Buttons>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Reunião agendada"}</DialogTitle>
                <Form><Form.Group className={classes.form} controlId="formBasicName">
                </Form.Group>
                </Form>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                    <div>
                        <p>Reunião agendada com sucesso</p>
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
                    history.push("/homepage");
                }}
            >Cancelar
     </Button>

        </div>
    );
}
export default ScheduleMeeting;