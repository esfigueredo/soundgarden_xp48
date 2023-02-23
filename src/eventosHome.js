async function main() {
    const findEvents = await fetch('https://soundgarden-api.vercel.app/events');
    const list = await findEvents.json();

    // ordena a lista pelo campo 'scheduled' em ordem decrescente
    const sortedList = list.sort((a, b) => new Date(a.scheduled) - new Date(b.scheduled));

    // pega os três primeiros itens da lista ordenada
    const eventsToShow = sortedList.slice(0, 3);

    const root = document.querySelector('#container-eventos-1');

    eventsToShow.forEach(evento => {
        const article = document.createElement('article');
        article.classList.add('evento', 'card', 'p-5', 'm-3');

        const data = new Date(evento.scheduled);

        const h2 = document.createElement('h2');
        h2.innerText = evento.name + ' - ' + data.toString();
        article.appendChild(h2);

        const h4 = document.createElement('h4');
        h4.innerText = evento.attractions;
        article.appendChild(h4);

        const p = document.createElement('p');
        p.innerText = evento.description;
        article.appendChild(p);

        const button = document.createElement('button')
        button.classList.add('btn', 'btn-primary')
        button.innerText = 'reservar ingresso'
        button.addEventListener('click', () => {
            let modal = document.getElementById('modal')
            let fade = document.getElementById('fade')
            modal.style.display = 'block'
            fade.style.display = 'block'

            let btnEviar = document.getElementById('btnEnviarReserva')

            btnEviar.addEventListener('click', async (e) => {

                try {
                    const inputDadosPost = {
                        owner_name: document.getElementById('text-name').value,
                        owner_email: document.getElementById('text-email').value,
                        number_tickets: document.getElementById('numeroTickets').value,
                        event_id: evento._id
                    }

                    let resposta = await fetch('https://soundgarden-api.vercel.app/bookings', {
                        method: 'POST',
                        body: JSON.stringify(inputDadosPost),
                        headers: { 'Content-Type': 'application/json' }
                    })

                    alert("Reserva criada com sucesso!")
                    console.log(resposta.ok)
                    window.location.href = 'index.html'
                }
                catch (erro) {
                    console.log(erro)
                    alert("Não foi possível criar a reserva tente movamente mais tarde")
                    window.location.href = 'index.html'
                }
            })
        })
        article.appendChild(button);

        root.appendChild(article);
    });
}

main();