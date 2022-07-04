function validarCPF(cpf) {
  if (cpf.length !== 14) {
    return {
      valido: false,
      texto: "CPF deve ter 11 dígitos.",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}
function validarCep(cep) {
  if (cep.length !== 10) {
    return {
      valido: false,
      texto: "CEP deve ter 8 dígitos.",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return {
      valido: false,
      texto: "Senha deve ter 4 e 72 dígitos.",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}
function validarNome(nome) {
  if (nome.length < 4 || nome.length > 20) {
    return {
      valido: false,
      texto: "Nome deve ter 4 e 20 caracteres.",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}
function validarSobreNome(sobreNome) {
  if (sobreNome.length < 4 || sobreNome.length > 20) {
    return {
      valido: false,
      texto: "Sobrenome deve ter 4 e 20 caracteres.",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}

function endereco(address) {
  if (address.length < 4 || address.length > 10000) {
    return {
      valido: false,
      texto: "Insira o endereco!",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}
function numero(number) {
  if (number.length < 1 || number.length > 10000) {
    return {
      valido: false,
      texto: "Insira o número!",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}
function estado(state) {
  if (state.length < 1 || state.length > 50) {
    return {
      valido: false,
      texto: "Insira o estado!",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}
function cidade(city) {
  if (city.length < 1 || city.length > 10000) {
    return {
      valido: false,
      texto: "Insira a cidade!",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}

export {
  validarCPF,
  validarCep,
  validarSenha,
  validarNome,
  validarSobreNome,
  endereco,
  numero,
  estado,
  cidade,
};
