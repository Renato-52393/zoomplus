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

function Channel() {
    let history = useHistory();
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <p>Bem vindo ao chat!</p>
            <Form>
                <Form.Group className={classes.form} controlId="formBasicChannel">
                    <Form.Label>Nome do canal</Form.Label>
                    <Form.Control type="channel" placeholder="Insira o nome do canal" />
                </Form.Group>
                <div>
                <input type="checkbox" /> Público
            </div>
                <Form.Group className={classes.form} controlId="formBasicMembers">
                    <Form.Label>Adicionar membros (opcional)</Form.Label>
                    <Form.Control type="members" placeholder="Pesquisar pelo nome" />
                </Form.Group>
            </Form>
         


            <Button variant="outline-primary"
                onClick={() => {
                    history.push("/");
                }}
            >Criar Canal
    </Button>

        </div>
    );
}
export default Channel;