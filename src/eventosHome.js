async function main() {
    const findEvents = await fetch('https://soundgarden-api.vercel.app/events');
    const list = await findEvents.json();
  
    // ordena a lista pelo campo 'scheduled' em ordem decrescente
    const sortedList = list.sort((a, b) => new Date(a.scheduled) - new Date(b.scheduled));
  
    // pega os três primeiros itens da lista ordenada
    const eventsToShow = sortedList.slice(0, 3);
  
    const root = document.querySelector('#container-eventos-1');
  
    eventsToShow.forEach(event => {
        const article = document.createElement('article');
        article.classList.add('evento', 'card', 'p-5', 'm-3');
  
        const data = new Date(event.scheduled);
  
        const h2 = document.createElement('h2');
        h2.innerText = event.name + ' - ' + data.toString();
        article.appendChild(h2);
  
        const h4 = document.createElement('h4');
        h4.innerText = event.attractions;
        article.appendChild(h4);
  
        const p = document.createElement('p');
        p.innerText = event.description;
        article.appendChild(p);
  
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-primary');
        button.innerText = 'reservar ingresso';
        article.appendChild(button);          
  
        root.appendChild(article);
    });
  }
  
  main();