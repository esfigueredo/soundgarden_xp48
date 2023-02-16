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
            poster : 'vaiquevai.eissoai',
            atracoes: trataAtracoes(document.querySelector('#atracoes').value),
            descricao: document.querySelector('#descricao').value,
            data: formataData(document.querySelector('#data').value),
            lotacao: document.querySelector('#lotacao').value
        }

        let resposta = await fetch('https://soundgarden-api.vercel.app/events', {
            method: 'POST',
            body: JSON.stringify(inputDadosPost),
            headers: {'Content-Type' : 'application/json'}
        })

        console.log(resposta.ok)

    }
    catch (erro) {
        console.log(erro)
    }    
})

