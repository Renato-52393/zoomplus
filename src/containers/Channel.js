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

function Channel() {
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
            <p>Bem vindo ao canal</p>
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
         

            <Buttons variant="outlined" color="primary" onClick={handleClickOpen}>
                Criar canal
      </Buttons>
      <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Canal criado"}</DialogTitle>
                <Form><Form.Group className={classes.form} controlId="formBasicName">
                </Form.Group>
                </Form>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                    <div>
                        <p>Canal criado com sucesso</p>
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

        </div>
    );
}
export default Channel;