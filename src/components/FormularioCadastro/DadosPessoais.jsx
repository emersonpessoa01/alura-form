import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { mask, unMask } from "remask";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function DadosPessoais({ aoEnviar }) {
  const classes = useStyles();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  const mascaraCpf = (event) => {
    const valorOriginal = unMask(event.target.value);
    const valorMascarado = mask(valorOriginal, [
      "999.999.999-99",
    ]);
    setCpf(valorMascarado);
  };

  return (
    <form
      className={classes.form}
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({
            nome,
            sobrenome,
            cpf,
            novidades,
            promocoes,
          });
        }
      }}
    >
      <Grid container spancing={2}>
        <Grid item xs={12}>
          <TextField
            value={nome}
            onChange={(event) => {
              setNome(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.nome.valido}
            helperText={erros.nome.texto}
            id="nome"
            autoFocus
            label="Nome"
            type="text"
            required
            name="nome"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={sobrenome}
            onChange={(event) => {
              setSobrenome(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.sobrenome.valido}
            helperText={erros.sobrenome.texto}
            id="sobrenome"
            name="sobrenome"
            label="Sobrenome"
            type="text"
            required
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={cpf}
            onChange={mascaraCpf}
            onBlur={validarCampos}
            error={!erros.cpf.valido}
            helperText={erros.cpf.texto}
            id="CPF"
            name="cpf"
            label="CPF"
            type="text"
            required
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Grid>

        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              checked={promocoes}
              onChange={(event) => {
                setPromocoes(event.target.checked);
              }}
              name="promocoes"
              color="secondary"
            />
          }
        />

        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              checked={novidades}
              onChange={(event) => {
                setNovidades(event.target.checked);
              }}
              name="novidades"
              color="secondary"
            />
          }
        />
      </Grid>
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

export default DadosPessoais;
