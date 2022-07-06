import React, { useState, useContext } from "react";

import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function DadosUsuario({ aoEnviar }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  console.log({email},{senha})

  return (
    <form
      className={classes.form}
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({
            email,
            senha,
          });
        }
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.email.valido}
            helperText={erros.email.texto}
            id="email"
            autoFocus
            name="email"
            label="email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            value={senha}
            onChange={(event) => {
              setSenha(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            id="senha"
            name="senha"
            label="senha"
            type="password"
            required
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>

      {/* <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button> */}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        className={classes.submit}
      >
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
