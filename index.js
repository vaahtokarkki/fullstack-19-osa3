const express = require('express')
const bodyParser = require('body-parser')
var morgan = require('morgan')
const cors = require('cors')
const app = express()

let persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '050-1236543'
    },
    {
        id: 2,
        name: 'Arto Järvinen',
        number: '041-21423123'
    },
    {
        id: 3,
        name: 'Lea Kutvonen',
        Number: '040-4323234'
    },
    {
        id: 4,
        name: 'Martti Tiennari',
        Number: '09-784232'
    }
]

app.use(bodyParser.json())
morgan.token('data', (req, res) => {
    return JSON.stringify(req.body)
})
app.use(morgan(":method :url :status :res[content-length] - :response-time ms data: :data"))
app.use(cors())
app.use(express.static('build'))

const generateId = () => {
    return Math.floor(Math.random() * Math.floor(10000));
}

app.get('/info', (req, res) => {
    res.send(`
        <p>Puhelinluettelossa on ${persons.length} henkilön tiedot</p>
        <p>${new Date()}</p>
    `)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(note => note.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log(body)

    if (body.name === undefined || body.number === undefined || body.name === "" || body.number === "") {
        return response.status(400).json({ error: 'name or number missing' })
    }

    p = persons.filter(p => p.name === body.name)
    if (p.length > 0) {
        return response.status(400).json({ error: 'name must be unique' })
    }


    const person = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(person)

    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
