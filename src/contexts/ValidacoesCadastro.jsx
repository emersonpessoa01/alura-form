import React from "react";

const ValidacoesCadastro = React.createContext({
  cpf: semValidacao,
  cep: semValidacao,
  senha: semValidacao,
  nome: semValidacao,
  sobreNome: semValidacao,
  endereco: semValidacao,
  numero: semValidacao,
  estado: semValidacao,
  cidade: semValidacao,
});

function semValidacao(dados) {
  console.log(dados);
  return {
    valido: true,
    texto: "",
  };
}
export default ValidacoesCadastro;
