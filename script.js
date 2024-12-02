const form = document.querySelector("form")
const respmedia = document.querySelector("h3")
const situacao = document.querySelector("h4")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.nomedoAluno.value
    const n1 = Number(formulario.n1.value)
    const n2 = Number(formulario.n2.value)
    const n3 = Number(formulario.n3.value)

    const media = (n1 + n2 + n3) / 3

    if (media >= 6){
        situacao.innerText = "Parabéns + {nome}! Você foi muito bem! "
    situacao.style.color = "green"
}else {
    situacao.innerText = "Eita +{nome}! Você não atingiu a média... "
situacao.style.color = "red"
}
respmedia.innerText = "Media das Notas + {media}"
}
)
