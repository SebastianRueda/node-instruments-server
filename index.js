const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.options('*', cors())

app.use(express.json())

const instruments = [
    { id: 1, type: "01 - type", "brand": "01 - brand", "description": "01 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" },
    { id: 2, type: "02 - type", "brand": "02 - brand", "description": "02 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" },
    { id: 3, type: "03 - type", "brand": "03 - brand", "description": "03 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" },
    { id: 4, type: "04 - type", "brand": "04 - brand", "description": "04 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" },
    { id: 5, type: "05 - type", "brand": "05 - brand", "description": "05 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" },
    { id: 6, type: "06 - type", "brand": "06 - brand", "description": "06 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" },
    { id: 7, type: "07 - type", "brand": "07 - brand", "description": "07 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" },
    { id: 8, type: "08 - type", "brand": "08 - brand", "description": "08 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" },
    { id: 9, type: "09 - type", "brand": "09 - brand", "description": "09 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" },
    { id: 10, type: "10 - type", "brand": "10 - brand", "description": "10 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" },
    { id: 11, type: "11 - type", "brand": "11 - brand", "description": "11 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" },
    { id: 12, type: "12 - type", "brand": "12 - brand", "description": "12 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" },
    { id: 13, type: "13 - type", "brand": "13 - brand", "description": "13 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" },
    { id: 14, type: "14 - type", "brand": "14 - brand", "description": "14 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" },
    { id: 15, type: "15 - type", "brand": "15 - brand", "description": "15 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" },
    { id: 16, type: "16 - type", "brand": "16 - brand", "description": "16 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png" },
    { id: 17, type: "17 - type", "brand": "17 - brand", "description": "17 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png" },
    { id: 18, type: "18 - type", "brand": "18 - brand", "description": "18 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png" },
    { id: 19, type: "19 - type", "brand": "19 - brand", "description": "19 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png" },
    { id: 20, type: "20 - type", "brand": "20 - brand", "description": "20 - description", image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png" }
]

app.get('/api/instruments', (req, res) => {
    res.send(instruments)
})

app.get('/api/instruments/search', (req, res) => {
    const filtered = instruments.filter((inst) => {
        return inst.id.includes(req.query.q)
    })

    res.send(filtered)
})

const port = 3000
app.listen(port, () => {
    console.log(`listening on port ${port}...`)
})