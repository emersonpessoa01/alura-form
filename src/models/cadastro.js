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

function validarEmail(email) {
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  if (!validEmail.test(email)) {
    return {
      valido: false,
      texto: "Digite um email válido.",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}

function validarSenha(senha) {
  const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
  if (!validPassword.test(senha)) {
    return {
      valido: false,
      texto: "Digite senha acima de 5 caracteres, com letras e números.",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}

function validarNome(nome) {
  const validNome = new RegExp("^([A-Za-z]s?){3,20}$");
  if (!validNome.test(nome)) {
    return {
      valido: false,
      texto: "Somente letras maiúsculas ou minúsculas e sem espaço.",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}
function validarSobreNome(sobreNome) {
  const validSobreNome = new RegExp("^([A-Za-z]s?){3,20}$");
  if (!validSobreNome.test(sobreNome)) {
    return {
      valido: false,
      texto: "Somente letras maiúsculas ou minúsculas e sem espaço.",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}

function endereco(address) {
  const validEndereco = new RegExp("^([A-Za-z]s?){4,50}$");
  if (!validEndereco.test(address)) {
    return {
      valido: false,
      texto: "Somente letras, números e com espaço!",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}
function numero(number) {
  const validNumber = new RegExp("^([0-9]s?){1,}$");
  if (!validNumber.test(number)) {
    return {
      valido: false,
      texto: "Somente números igual ou acima de 1 e sem espaços!",
    };
  } else {
    return {
      valido: true,
      texto: "",
    };
  }
}
function estado(state) {
  const validState = new RegExp("^([A-Za-záéíóúâêô]s?){3,50}$");
  if (!validState.test(state)) {
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
  const validState = new RegExp("^([A-Za-záéíóúâêô]s?){3,50}$");
  if (!validState.test(city)) {
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
  validarEmail,
  validarSenha,
  validarNome,
  validarSobreNome,
  endereco,
  numero,
  estado,
  cidade,
};
