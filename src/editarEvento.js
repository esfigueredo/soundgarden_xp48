const idEvento = new URLSearchParams(window.location.search)

const url = 'https://soundgarden-api.vercel.app/events/' + idEvento.get('id') // resgatar os eventos dessa url


function trataAtracoes(value) {
    return value.split(',')
}

async function preencheCampos() {

    const findEvents = await fetch(url)

    const evento = await findEvents.json()

    document.getElementById('nome').value = evento.name
    document.getElementById('banner').value = evento.poster
    document.getElementById('atracoes').value = evento.attractions
    document.getElementById('descricao').value = evento.description
    document.getElementById('data').value = evento.scheduled
    document.getElementById('lotacao').value = evento.number_tickets
}

document.getElementById('btn-editarEvento').addEventListener('click', async (e) => {

    e.preventDefault()

    try {

        const inputDadosPost = {
            name: document.getElementById('nome').value,
            poster : document.getElementById('banner').value,
            attractions:  trataAtracoes(document.getElementById('atracoes').value),
            description: document.getElementById('descricao').value,
            scheduled: document.getElementById('data').value,
            number_tickets: document.getElementById('lotacao').value
        }

        let resposta = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(inputDadosPost),
            headers: { 'Content-Type': 'application/json' }
        })

        if (resposta.ok) {
            alert('Evento alterado com sucesso')
            window.location.href = 'admin.html'
        }

    } catch (erro) {
        alert('Não foi possível alterar o evento - ' + erro)
    }
})

preencheCampos()
