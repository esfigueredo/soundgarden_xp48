

const postEvent = document.querySelector('#tbody-reservas-adm') // selecionar pra onde vão os eventos no HTML (posicionar) através do DOM

// BUSCAR ID A PARTIR DA URL / acho que não deu certo

const idReserva = new URLSearchParams(window.location.search)
const url = 'https://soundgarden-api.vercel.app/bookings/' + idReserva.get('id') // resgatar os eventos dessa url

console.log(url)

const postID = idReserva.get('id');

// BUSCAR OS EVENTOS (GET)

async function getEvents(){ 
    const response = await fetch(url); // esperar as requisições (await) / response = variável padrão (primeira resposta após o fetch)
    console.log(response.ok); // resposta ok no F12 (status: 200)

    const data = await response.json(); // json vai extrair em dados recebendo-os como um array de objetos / data = variável padrão (posso chamar por outro nome, como events)
    console.log(data);

     data.map((event) => { 
        // criar os elementos da tabela de eventos com base no HTML
        const tr = document.createElement("tr"); // div que vai abrigar todos os elementos abaixo em linha
        const tdDate = document.createElement("td"); 
        const tdName = document.createElement("td");
        const tdAttractions = document.createElement("td");
        const tdOwner = document.createElement("td");
        const tdNumeroTikets = document.createElement("td");

        console.log(event)
        th.scope = "row"; 

        // defino o número da coluna # que indica a quantidade de eventos (início=1)
        th.innerText = 1 // ainda não feito !
        
        // criados os elementos da tabela, preenche-los com o conteúdo que vem da API:
        tdDate.innerText = event.scheduled; // lembrando que 'event' é o dado que estou recebendo
        tdName.innerText = event.name; // 'scheduled', 'name' e 'attractions' é como cada elemento está identificado na API
        tdAttractions.innerText = event.attractions;
        tdOwner.innerText = event.owner_name;
        tdNumeroTikets.innerText = event.number_tickets;

        console.log(event.scheduled)
        console.log(event.name)
        console.log(event.attractions)
        console.log(event.owner_name)
        console.log(event.number_tickets)
        
        // colocar todos na div tr (através do appendChild) - essa div é a linha da tabela e vai receber todos os elementos de cada evento formando as colunas (faz uma coluna de cada vez)
        tr.appendChild(th);
        tr.appendChild(tdDate);
        tr.appendChild(tdName);
        tr.appendChild(tdAttractions);
        tr.appendChild(tdNumeroTikets);
        
        // posicionar essa div (tr) no #tbody-events-adm (que foi definida como postEvent no início do código)
        postEvent.appendChild(tr)

        // a declaração return finaliza a execução de uma função / ainda não entendi como funciona...
        //return tr; // tr é a div que está abrigando os elementos na tabela
    }) 
}

// por fim, chamo a função pra ela ser executada

// if (!postID) {
//     getEvents()
// }else{
//     console.log(postID)
// }

getEvents()

// --------------------------------------------------------------------------------
// FALTANDO: incluir modal no botão 'ver reservas' e contagem das linhas da tabela
// --------------------------------------------------------------------------------

