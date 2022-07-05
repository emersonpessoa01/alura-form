import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import {
  validarCPF,
  validarCep,
  validarSenha,
  validarNome,
  validarSobreNome,
  endereco,
  numero,
  estado,
  cidade,
} from "./models/cadastro";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Background from "./assets/aluraplus-home.png"

const useStyles = makeStyles((theme) => ({
  container: {
    border: "1px solid #fff",
    borderRadius: "0.5rem",
    boxShadow: "0 0 1rem #6c757d",
    padding: "2rem 5%"
  },
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: "2",
  },

  avatar: {
    margin: theme.spacing(0),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{
            cpf: validarCPF,
            cep: validarCep,
            senha: validarSenha,
            nome: validarNome,
            sobrenome: validarSobreNome,
            endereco: endereco,
            numero: numero,
            estado: estado,
            cidade: cidade,
          }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
