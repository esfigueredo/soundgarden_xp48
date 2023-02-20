//cria um objeto com os dados necessários da api e transforma em stringFile (para json)

function trataAtracoes(value) {
    return value.split(',')
}

// let teste = formataData('20/02/2023 22:00')
// console.log(teste)

function formataData(value) {
    let dataHora = value.split(' ')
    let [dia, mes, ano] = dataHora[0].split('/')
    let [hora, minuto]  = dataHora[1].split(':')

    let dataFormatada = new Date(ano, mes, dia, hora, minuto)
    return dataFormatada.toJSON()
}

const enviarPost = document.getElementById('btnEviaEvento')

enviarPost.addEventListener('click', async (e) => {

    e.preventDefault()

    try{
        const inputDadosPost = {
            name: document.querySelector('#nome').value,
            poster : document.querySelector('#poster').value,
            attractions: trataAtracoes(document.querySelector('#atracoes').value),
            description: document.querySelector('#descricao').value,
            scheduled: formataData(document.querySelector('#data').value),
            number_tickets: document.querySelector('#lotacao').value
        }

        let resposta = await fetch('https://soundgarden-api.vercel.app/events', {
            method: 'POST',
            body: JSON.stringify(inputDadosPost),
            headers: {'Content-Type' : 'application/json'}
        })
        alert("Evento criado com sucesso!")
        console.log(resposta.ok)
        window.location.href = 'admin.html'

    }
    catch (erro) {
        console.log(erro)
        alert("Não foi possível criar o evento")
    }    
})

