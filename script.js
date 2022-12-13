// Seleção De Elementos.

//Botão P Gerar Senha, Que Esta No Documento No Seletor: "#open-generate-password"
const generatePasswordButton = document.querySelector("#open-generate-password")

//Div Na Qual Vai Aparecer A Senha Gerada.
const generatedPasswordElement = document.querySelector("#generated-password")



// Funçoes.

//Letras - Numeros - Símbolos, Para Gerar A Senha.
//Letras Minúsculas
const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

//Letras Maiúscula
const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
} 

//Numeros
const getNumber = () => {
  return Math.floor(Math.random() * 10).toString()
}

//Simbolos
const getSymbol = () => {
  const symbols = "(){}[]<>/|,.-=+!@#$%&*~^"
  return symbols[Math.floor(Math.random() * symbols.length)]
}

//Por Fim Função Que Junta Letras-Numeros-Simbolos = Gerando Senha Final.
const generatePassword = (getLetterUpperCase, getLetterLowerCase, getNumber, getSymbol) => {
  let password = " "

  const passwordLenght = 10

  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  ]

  for (i = 0; i < passwordLenght; i = i + 4) {
    generators.forEach(() => {
      const randomValue = generators[Math.floor(Math.random() * generators.length)]()

      password += randomValue
    })
  }

  password = password.slice(3)

  generatedPasswordElement.style.display = "block"
  generatedPasswordElement.querySelector("h4").innerText = password
}



// Eventos. (São Os Click)

//Criar Um Evento No Qual Vai Disparar A Senha.
generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterUpperCase,
    getLetterLowerCase,
    getNumber,
    getSymbol,
  )
})
