const mongoose = require('mongoose')

console.log(process.argv)

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://fullstack:${password}@cluster0-zbnaf.mongodb.net/test?retryWrites=true`
mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})
const Person = mongoose.model('Person', personSchema)


if (process.argv.length == 5) {
    const name = process.argv[3]
    const number = process.argv[4]
    console.log(`Lisätään ${name} numero ${number} luetteloon`)

    const pers = new Person({
        name: name,
        number: number
    })

    pers.save().then(response => {
        mongoose.connection.close();
    })
    return
}

Person.find({}).then(result => {
    console.log('puhelinluettelo:')
    result.forEach(p => {
        console.log(`${p.name} ${p.number}`)
    })
    mongoose.connection.close()
})
