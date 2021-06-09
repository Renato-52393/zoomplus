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

function JoinMeeting() {
    let history = useHistory();
    const classes = useStyles();

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
            <div>
                <input type="checkbox" /> Entrar com áudio
            </div>
            <div>
                <input type="checkbox" /> Entrar com vídeo
            </div>


            <Button variant="outline-primary"
                onClick={() => {
                    history.push("/join");
                }}
            >Juntar
     </Button>
            <Button variant="outline-primary"
                onClick={() => {
                    history.push("/");
                }}
            >Cancelar
     </Button>

        </div>
    );
}
export default JoinMeeting;