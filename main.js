let numberSecret = parseInt(Math.random() * 11)
let tentativas = 3
let htmlResultado = document.getElementById('resultado')

function Chutar() {
  let kick = parseInt(document.getElementById('valor').value)
  let kickButton = document.getElementById('kickButton')

  if (kick == numberSecret) {
    htmlResultado.innerHTML = 'você acertou ✅, clique no botão de recomeçar'
  } else if (kick > 10 || kick < 0 || isNaN(kick)) {
    htmlResultado.innerHTML = 'Você tem que digitar um numero de 0 á 10!'
  } else if (kick != numberSecret && kick > numberSecret) {
    tentativas = tentativas - 1
    htmlResultado.innerHTML = `Você errou o número é menor 🔙 e você tem ${tentativas} tentativa(s)`
  } else if (kick != numberSecret && kick < numberSecret) {
    tentativas = tentativas - 1
    htmlResultado.innerHTML = `Você errou o número é maior 🔝 e você tem ${tentativas} tentativa(s) `
  }

  if (tentativas == 0) {
    htmlResultado.innerHTML = `Você perdeu 😭 o número era ${numberSecret}, clique no botão para recomeçar`
  }

  // Botão desabilitado
  if (kick == numberSecret) {
    kickButton.disabled = true
  } else if (tentativas == 0) {
    kickButton.disabled = true
  }
}

function Recomecar() {
  numberSecret = parseInt(Math.random() * 11)
  kickButton.disabled = false
  tentativas = 3
  htmlResultado.innerHTML = 'Agora você tem três tentativas! 👌'
  valor.value = ''
}
