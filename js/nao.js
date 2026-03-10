const botao = document.getElementById("nao")
const caixa = document.querySelector(".fundo")

botao.addEventListener("mouseover", () => {

  const caixaRect = caixa.getBoundingClientRect()

  const larguraMax = caixaRect.width - botao.offsetWidth
  const alturaMax = caixaRect.height - botao.offsetHeight

  const x = Math.random() * larguraMax
  const y = Math.random() * alturaMax

  botao.style.position = "absolute"
  botao.style.left = x + "px"
  botao.style.top = y + "px"

})