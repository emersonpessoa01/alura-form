import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { mask, unMask } from "remask";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

const useStyles = makeStyles((theme) => ({
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
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos] = useErros(validacoes);

  const mascaraCep = (event) => {
    const valorOriginal = unMask(event.target.value);
    const valorMascarado = mask(valorOriginal, ["99.999-999"]);
    setCep(valorMascarado);
  };

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
            onChange={mascaraCep}
            onBlur={validarCampos}
            error={!erros.cep.valido}
            helperText={erros.cep.texto}
            id="cep"
            autoFocus
            name="cep"
            label="CEP"
            type="text"
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={endereco}
            onChange={(event) => {
              setEndereco(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.endereco.valido}
            helperText={erros.endereco.texto}
            id="endereco"
            name="endereco"
            label="Endereço"
            type="text"
            required
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
            onBlur={validarCampos}
            error={!erros.numero.valido}
            helperText={erros.numero.texto}
            id="numero"
            name="numero"
            label="Numero"
            type="text"
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={estado}
            onChange={(event) => {
              setEstado(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.estado.valido}
            helperText={erros.estado.texto}
            id="estado"
            name="estado"
            label="Estado"
            type="text"
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={cidade}
            onChange={(event) => {
              setCidade(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.cidade.valido}
            helperText={erros.cidade.texto}
            id="cidade"
            name="cidade"
            label="Cidade"
            type="text"
            required
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
