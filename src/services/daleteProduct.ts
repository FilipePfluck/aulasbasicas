import { Request, Response } from 'express'

import { getRepository } from 'typeorm'

import Product from '../database/models/Product'

const deleteProduct = async(request: Request, response: Response) => {
    const productRepository = getRepository(Product)

    const {id} = request.params

    await productRepository.delete(id)

    return response.send()
}

export default deleteProduct