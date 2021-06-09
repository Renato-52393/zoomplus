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

function ScheduleMeeting() {
    /* const localData: EventSettingsModel = {
         dataSource:[{
             EndTime: new Date(2021,0,11,6,30),
             StartTime new Date(2021,0,11,4,0)
         }]
     }*/
    let history = useHistory();
    const classes = useStyles();

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
            <Button variant="outline-primary"
                onClick={() => {
                    history.push("/");
                }}
            >Agendar
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
export default ScheduleMeeting;