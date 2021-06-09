import React, { useState } from 'react';
import "./Meeting.css";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from 'react-bootstrap/Button';

//alerts
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

function Meeting() {
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


    //webcam
    const [playing, setPlaying] = useState(false);
    const [muted] = useState(true);
    const HEIGHT = 500;
    const WIDTH = 500;

    const startVideo = () => {
        setPlaying(true)
        navigator.getUserMedia(
            {
                video: true,
            },
            (stream) => {
                let video = document.getElementsByClassName("meeting_videoFeed")[0];
                if (video) {
                    video.srcObject = stream;
                }
            },
            (err) => console.error(err)
        );

    };
    const stopVideo = () => {
        setPlaying(false)
        let video = document.getElementsByClassName("meeting_videoFeed")[0];
        video.srcObject.getTracks()[0].stop();
    }
    const mute = () => {
        navigator.getUserMedia(
            {
                video: true,
                muted: true,
            },
            (stream) => {
                let video = document.getElementsByClassName("meeting_videoFeed")[0];
                if (video) {
                    video.srcObject = stream;
                }
            },
            (err) => console.error(err)
        );
    }
    const unmute = () => {
        navigator.getUserMedia(
            {
                video: true,
                muted: false,
            },
            (stream) => {
                let video = document.getElementsByClassName("meeting_videoFeed")[0];
                if (video) {
                    video.srcObject = stream;
                }
            },
            (err) => console.error(err)
        );
    }

    return <div className="meeting">
        <div className="meeting_container">
            <video
                height={HEIGHT}
                width={WIDTH}
                muted
                autoPlay
                className="meeting_videoFeed"
            ></video>
            {playing ? (
                <Button variant="outline-primary"
                    onClick={stopVideo}>Parar Vídeo
                </Button>
            ) : (
                <Button variant="outline-primary"
                    onClick={startVideo}>Iniciar Vídeo
                </Button>
            )}
            {muted ? (
                <Button variant="outline-primary"
                    onClick={unmute}>Conectar Áudio
                </Button>
            ) : (
                <Button variant="outline-primary"
                    onClick={mute}>Desconectar Áudio
                </Button>
            )}

            <Buttons variant="outlined" color="primary" onClick={handleClickOpen}>
                BreakoutRooms
      </Buttons>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Criar sala(s) simultânea(s)"}</DialogTitle>
                <Form><Form.Group className={classes.form} controlId="formBasicName">

                    <Form.Control type="name" placeholder="Insira nº de salas" />
                </Form.Group>
                </Form>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                    <div>
                        <input type="checkbox" /> Atribuir automaticamente
            </div>
                    <div>
                        <input type="checkbox" /> Atribuir manualmente
            </div>
                    <div>
                        <input type="checkbox" /> Permitir que os participantes escolham a sua sala
            </div>
                </DialogContent>
                <DialogActions>
                    <Buttons onClick={handleClose} color="primary">
                        Criar
          </Buttons>
                </DialogActions>
            </Dialog>







            <Button variant="outline-primary"
                onClick={() => {
                }}
            >Chat
     </Button>
            <Button variant="outline-primary"
                onClick={() => {
                    history.push("/");
                }}
            >Sair
     </Button>
        </div >
        <div className="meeting_input"></div>
    </div >

}
export default Meeting;