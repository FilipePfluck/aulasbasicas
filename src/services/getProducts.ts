import { Request, Response } from 'express'

import { getRepository } from 'typeorm'

import Product from '../database/models/Product'

const getProduct = async(request: Request, response: Response) => {
    const productRepository = getRepository(Product)

    const products = await productRepository.find()

    return response.json(products)
}

export default getProduct