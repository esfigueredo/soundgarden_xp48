
async function main() {
    const findEvents = await fetch('https://soundgarden-api.vercel.app/events')  // passa a conectionString da API e conecta a ela

    const list = await findEvents.json() //transforma o array (json) que vem da API em um objeto JSON

    const root = document.querySelector('#containerEventos')    //seleciona a TAG já criaada no objeto HTML onde irão cair os dados da API

    //lista e cria os elementos 
    list.forEach(event => {
        //criando o article
        const article = document.createElement('article')
        //definindo as classes dos articles
        article.classList.add('evento', 'card', 'p-5', 'm-3')

        //transforma o objeto em data
        const data = new Date(event.scheduled)

        //cria h2 concatenado com a data formatada acima
        const h2 = document.createElement('h2')
        h2.innerText = event.name + ' - ' + data.toString()
        //insere o elemento criado no article criado acima
        article.appendChild(h2)

        const h4 = document.createElement('h4')
        h4.innerText = event.attractions 
        article.appendChild(h4)

        const p = document.createElement('p')
        p.innerText = event.description 
        article.appendChild(p)

        const button = document.createElement('button')
        button.classList.add('btn', 'btn-primary')
        button.innerText = 'reservar ingresso'
        button.addEventListener('click', () => {
            alert(event.name) // deverá inserir a função
        })
        // criar link para a reserva
        article.appendChild(button)          

        //inser o article dentro do objeto root, que foi o que a gente selecionou acima
        root.appendChild(article)
    })
   
}

main() 