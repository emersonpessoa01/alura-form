import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography
      variant="h5"
      align="center"
      style={{
        border: "1px solid #10e61077",
        borderLeft: "4px solid #0a880a77",
        borderRadius: "8px",
        padding: "10px",
        color: "#0a880a77",
        fontSize: "1.5rem",
        width: "100%",
      }}
    >
      Obrigado pelo Cadastro!
    </Typography>,
  ];

  function coletarDados(dados) {
    setDados({
      ...dadosColetados,
      ...dados,
    });
    proximo();
  }
  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }
  return (
    <>
      <Stepper
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.625rem",
          marginTop: "1rem",
          marginBottom: "1rem",
          borderRadius: "0.5rem",
        }}
        activeStep={etapaAtual}
      >
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
