
function enviarWhats(event) {

    event.preventDefault()
    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value

    const fone = '5583996752805'

    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)
    const url = `https://wa.me/${fone}?text=${msgFormatada}`

    window.open(url, '_blank')
}