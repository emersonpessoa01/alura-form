import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function DadosEntrega({ aoEnviar }) {
  const classes = useStyles();
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      className={classes.form}
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({
          cep,
          endereco,
          numero,
          estado,
          cidade,
        });
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={cep}
            onChange={(event) => {
              setCep(event.target.value);
            }}
            id="cep"
            autoFocus
            name="cep"
            label="CEP"
            type="number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={endereco}
            onChange={(event) => {
              setEndereco(event.target.value);
            }}
            id="endereco"
            name="endereço"
            label="Enderço"
            type="text"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={numero}
            onChange={(event) => {
              setNumero(event.target.value);
            }}
            id="numero"
            name="numero"
            label="Numero"
            type="number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={estado}
            onChange={(event) => {
              setEstado(event.target.value);
            }}
            id="estado"
            name="estado"
            label="Estado"
            type="text"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={cidade}
            onChange={(event) => {
              setCidade(event.target.value);
            }}
            id="cidade"
            name="cidade"
            label="Cidade"
            type="text"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        className={classes.submit}
      >
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
