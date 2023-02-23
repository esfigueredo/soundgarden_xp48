
async function main() {
    const findEvents = await fetch('https://soundgarden-api.vercel.app/events')  // passa a conectionString da API e conecta a ela

    const list = await findEvents.json() //transforma o array (json) que vem da API em um objeto JSON

    const root = document.querySelector('#containerEventos')    //seleciona a TAG já criaada no objeto HTML onde irão cair os dados da API



    //lista e cria os elementos 
    list.forEach(evento => {
        //criando o article
        const article = document.createElement('article')
        //definindo as classes dos articles
        article.classList.add('evento', 'card', 'p-5', 'm-3')

        //transforma o objeto em data
        const data = new Date(evento.scheduled)

        //cria h2 concatenado com a data formatada acima
        const h2 = document.createElement('h2')
        h2.innerText = evento.name + ' - ' + data.toString()
        //insere o elemento criado no article criado acima
        article.appendChild(h2)

        const h4 = document.createElement('h4')
        h4.innerText = evento.attractions
        article.appendChild(h4)

        const p = document.createElement('p')
        p.innerText = evento.description
        article.appendChild(p)

        const h8 = document.createElement('h8')
        h8.innerText = evento._id
        h8.setAttribute('id', 'id')
        article.appendChild(h8)

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
                    window.location.href = 'eventos.html'
                }
                catch (erro) {
                    console.log(erro)
                    alert("Não foi possível criar a reserva tente movamente mais tarde")
                    window.location.href = 'eventos.html'
                }
            })
        })



        article.appendChild(button)

        //inser o article dentro do objeto root, que foi o que a gente selecionou acima
        root.appendChild(article)
    })
}



main()

