import { Request, Response } from 'express'

import { getRepository } from 'typeorm'

import Product from '../database/models/Product'

const CreateProduct = async(request: Request, response: Response)=>{
    const productRepository = getRepository(Product)

    const { name, description, price, image_url } = request.body

    console.log(name, description, price, image_url)

    const product = productRepository.create({
        name,
        description,
        image_url,
        price
    })

    await productRepository.save(product)
    
    return response.json({ok: true})
}

export default CreateProduct