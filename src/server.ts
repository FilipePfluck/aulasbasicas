import express from 'express'

import { getRepository } from 'typeorm'

import Product from './database/models/Product'

import CreateProduct from './services/createProduct'
import GetProducts from './services/getProducts'
import UpdateProduct from './services/updateProduct'
import deleteProduct from './services/daleteProduct'

import './database/connection'


const app = express()

app.use(express.json())

app.listen(3333, ()=>{
    console.log('server started')
})

app.post('/products', CreateProduct)

app.get('/products', GetProducts)

app.put('/products/:id', UpdateProduct)

app.delete('/products/:id', deleteProduct)