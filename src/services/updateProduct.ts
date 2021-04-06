import { Request, Response } from 'express'

import { getRepository } from 'typeorm'

import Product from '../database/models/Product'

const UpdateProduct = async(request: Request, response: Response) => {
    const productRepository = getRepository(Product)

    const {id} = request.params
    const { name, description, price, image_url } = request.body

    const product = await productRepository.findOne(id)

    if(!product){
        return response.status(400).json({error: 'user not found'})
    }

    await productRepository.save({
        ...product,
        name, 
        description, 
        price,
        image_url
    })

    return response.json(product)
}

export default UpdateProduct