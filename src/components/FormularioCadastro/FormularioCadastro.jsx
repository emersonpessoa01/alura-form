import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { FormControlLabel, Switch } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Alura
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormularioCadastro({ validarCPF, aoEnviar }) {
  const classes = useStyles();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({
    cpf: {
      valido: true,
      texto: "",
    },
  });

  const enviar = (event) => {
    event.preventDefault();
    aoEnviar({
      nome,
      sobrenome,
      cpf,
      novidades,
      promocoes,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <form className={classes.form} onSubmit={enviar} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nome"
                label="Nome completo"
                name="nome"
                autoComplete="nome"
                autoFocus
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="sobrenome"
                label="sobrenome"
                name="sobrenome"
                autoComplete="sobrenome"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={cpf}
                onChange={(event) => {
                  setCpf(event.target.value);
                }}
                onBlur={(event) => {
                  const ehValido = validarCPF(cpf);
                  setErros({
                    cpf: ehValido,
                  });
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
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
            Cadastrar
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
