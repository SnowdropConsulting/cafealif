const express = require ('express')
const dishes = require('./dishes.js')
const server = express()

server.get('/api/dishes',(req,res)=>{
    res.json(dishes)
})

server.get('/api/dishes/:id',(req,res)=>{
   const dish= dishes.find((el)=>el.id === +req.params.id)
    res.json(dish)
})

if (process.env.NODE_ENV === 'production'){
    server.use(express.static(path.join(path.resolve(), '/frontend/build')))
}
server.listen(8000,  ()=> {
    console.log(`Server is running. Port: 8000`)
})