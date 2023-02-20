const btnCriar = document.querySelector('')

btnCriar.addEventListener('click', () => criarEventos())
btnEditar.addEventListener('click', () => editarEventos())
btnExcluir.addEventListener('click', () => excluirEventos())

// var eventosList = []

// async function listEventos () {
//   try {
//     const list = await fetch('http://localhost:3333/recipes')


//     const listToJson = await list.json()

//     console.log(listToJson)

//     const { eventos } = listToJson

//     recipesList.push(eventos[1])

//     eventosList.map(evento => {
//       const div = document.querySelector('div')
    
//       const divE = document.createElement('div')
    
//       divE.innerHTML = `
//         <h1>${ eventos.name }</h1>
//         <h3>${ eventos.author }</h3>
//       `
    
//       div.appendChild(divE)
//     })
//   } catch (err) {
//     console.log(err)
//   }
// }


// async function criarEventos() { 
//   try {
//     const criar = await fetch('http://localhost:3333/recipes', 
//       { 
//         method: 'POST', 
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           id: "fbdf0a68-aba8-11ed-afa1-0242ac120002",
//           name: 'teste',
//           author: 'teste2'
//         }) 
//       })

//     const convert = await create.json()

//     console.log(convert) 
//   } catch (err) {
//     console.log(err)
//   }
// }


// async function editarEventos() { 

//   try {
//     const create = await fetch('http://localhost:3333/eventos/fbdf0a68-aba8-11ed-afa1-0242ac120002', 
//       { 
//         method: 'PUT', 
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           name: 'teste',
//         }) 
//       })

//     const convert = await create.json()

//     console.log(convert) 
//   } catch (err) {
//     console.log(err)
//   }
// }


// async function excluirEventos() { 
//   try {
//     const create = await fetch('http://localhost:3333/recipes/fbdf0a68-aba8-11ed-afa1-0242ac120002', 
//       { 
//         method: 'EXCLUIR'
//       })

//     const convert = await create.json()

//     console.log(convert) 
//   } catch (err) {
//     console.log(err)
//   }
// }

