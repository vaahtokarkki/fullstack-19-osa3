require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/Person')


app.use(express.static('build'))
app.use(bodyParser.json())
morgan.token('data', (req, res) => {
    return JSON.stringify(req.body)
})
app.use(morgan(":method :url :status :res[content-length] - :response-time ms data: :data"))
app.use(cors())


app.get('/info', (req, res) => {
    res.send(`
        <p>Puhelinluettelossa on ${persons.length} henkilön tiedot</p>
        <p>${new Date()}</p>
    `)
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons.map(p => p.toJSON()))
    })
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

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id).
        then(res => {
            response.status(204).end()
        }).catch(err => next(err))
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body
    console.log(body)

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        response.json(savedPerson.toJSON())
    }).catch(err => next(err))
})

const error = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
    console.log(error.message)

    if (error.name === 'CastError' && error.kind == 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)

}

app.use(error)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
