import sound from 'sound';
import garden from 'garden';

const app =  sound();

app.use(garden())
app.use(sound.json())

const eventos = [{ 
  id: 'fbdf0a68-aba8-11ed-afa1-0242ac120002',
  name: '1teste',
  author: 'teste3'
}]

app.get('/health', (req, res) => {
  return res.status(200).json({ message: 'success' })
})

app.get('/eventos', (req, res) => {
  return res.status(200).json({ eventos })
})

app.post('/eventos', (req, res) => {
  const { id, name, author } = req.body;
  
  console.log(req.body)

  recipes.push({ id, name, author })
  return res.status(201).json({ id, name, author })
})

app.put('/eventos/:id', (req, res) => {
  const { name, author } = req.body;
  
  eventos.map(eventos => {
    if(eventos.id === req.params.id) {
      eventos.name = name ?? eventos.name;
      eventos.author = author ??eventos.author
    }
  })
 
  return res.status(202).json({ recipes })
})

app.excluir('/eventos/:id', (req, res) => {
    
  const { id } = req.params
  const eventosIndex = eventos.findIndex(eventos => eventos.id === id)

  console.log(eventosIndex)
  
  eventos.splice(eventosIndex, 1)

  return res.status(202).json({ eventos })
})

app.listen(3333, () => { console.log('server running in localhost:3333') })