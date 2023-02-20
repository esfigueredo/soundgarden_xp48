const url = 'https://soundgarden-api.vercel.app/events' // resgatar os eventos dessa url

const postEvent = document.querySelector('#tbody-events-adm') // selecionar pra onde vão os eventos no HTML (posicionar) através do DOM

// BUSCAR ID A PARTIR DA URL / acho que não deu certo

const urlSearchParams = new URLSearchParams(window.location.search); // 
const postID = urlSearchParams.get("id");

// BUSCAR OS EVENTOS (GET)

async function getEvents(){ // função assíncrona pra pegar os eventos
    const response = await fetch(url); // esperar as requisições (await) / response = variável padrão (primeira resposta após o fetch)
    console.log(response); // resposta ok no F12 (status: 200)

    const data = await response.json(); // json vai extrair em dados recebendo-os como um array de objetos / data = variável padrão (posso chamar por outro nome, como events)
    console.log(data);

    data.map((event) => { // inserir os dados no template / map vai passar por cada um dos elementos que veio na requisição / event é o dado que estou recebendo

        // criar os elementos da tabela de eventos com base no HTML
        const tr = document.createElement("tr"); // div que vai abrigar todos os elementos abaixo em linha
        const th = document.createElement("th"); // div (colune) com a contagem de linhas da tabela
        const tdDate = document.createElement("td"); 
        const tdName = document.createElement("td");
        const tdAttractions = document.createElement("td");
        const tdActions = document.createElement("td");
        const buttonVerReservas = document.createElement("a");
        const buttonEditar = document.createElement("a");
        const buttonExcluir = document.createElement("a");

        console.log(event)
        // relembrando elementos da tabela: th (table header), td (table data) e tr (table row)

        // definir que os elementos da tabela serão alinhados em linhas (rows)
        th.scope = "row"; 

        // defino o número da coluna # que indica a quantidade de eventos (início=1)
        th.innerText = 1 // ainda não feito !
        
        // criados os elementos da tabela, preenche-los com o conteúdo que vem da API:
        tdDate.innerText = event.scheduled; // lembrando que 'event' é o dado que estou recebendo
        tdName.innerText = event.name; // 'scheduled', 'name' e 'attractions' é como cada elemento está identificado na API
        tdAttractions.innerText = event.attractions;
        
        // definir ação, estilo e texto de cada botão:
        buttonVerReservas.setAttribute("href", `modal-ver-reserva/modal-ver-res.html?id=${event._id}`); // montar o link com o id de cada botão na url pra ter páginas individuais
        buttonVerReservas.classList.add("btn", "btn-dark");
        buttonVerReservas.innerText = "ver reservas";

        buttonEditar.setAttribute("href", `editar-evento.html?id=${event._id}`);
        buttonEditar.classList.add("btn", "btn-secondary");
        buttonEditar.innerText = "editar";

        buttonExcluir.setAttribute("href", `excluir-evento.html?id=${event._id}`);
        buttonExcluir.classList.add("btn", "btn-danger");
        buttonExcluir.innerText = "excluir";

        // colocar todos na div tr (através do appendChild) - essa div é a linha da tabela e vai receber todos os elementos de cada evento formando as colunas (faz uma coluna de cada vez)
        tr.appendChild(th);
        tr.appendChild(tdDate);
        tr.appendChild(tdName);
        tr.appendChild(tdAttractions);
        tr.appendChild(tdActions);

        // adicionar os três botões dentro da coluna tdActions
        tdActions.appendChild(buttonVerReservas);
        tdActions.appendChild(buttonEditar);
        tdActions.appendChild(buttonExcluir);

        // incluir modal no botão 'ver reservas'
        

        // posicionar essa div (tr) no #tbody-events-adm (que foi definida como postEvent no início do código)
        postEvent.appendChild(tr)

        // a declaração return finaliza a execução de uma função / ainda não entendi como funciona...
        return tr; // tr é a div que está abrigando os elementos na tabela
    }) 
}

// por fim, chamo a função pra ela ser executada

if (!postID) {
    getEvents()
}else{
    console.log(postID)
}

// --------------------------------------------------------------------------------
// FALTANDO: incluir modal no botão 'ver reservas' e contagem das linhas da tabela
// --------------------------------------------------------------------------------
