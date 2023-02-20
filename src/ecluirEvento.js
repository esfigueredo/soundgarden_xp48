const idEvento = new URLSearchParams(window.location.search)

const url = 'https://soundgarden-api.vercel.app/events/' + idEvento.get('id') // resgatar os eventos dessa url


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

document.getElementById('btn-Deletar').addEventListener('click', async (e) => {

    e.preventDefault()

    try {
        let resposta = await fetch(url, {
            method: 'DELETE'
            //headers: { 'Content-Type': 'application/json' }
        })

        if (resposta.ok) {
            alert('Evento removido')
            window.location.href = 'admin.html'
        }

    } catch (erro) {
        alert('Não foi possível deletar o evento')
    }
})


preencheCampos()
