import * as productService from '@/service/product.services';

import { Request, Response } from 'express';

/**
 * Add products.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const addProducts = async (req: Request, res: Response) => {
  try {
    console.log('req --------', req.body);
    const result = await productService.addProducts(req.body);
    res.status(result.code).json(result);
  } catch (error) {
    return { code: 404, message: error };
  }
};

/**
 * Gets the API information.
 *
 * @param {Request} req
 * @param {Response} res
 */
export const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProducts();
    console.log('result', result);
    res.json(result);
  } catch (error) {
    // db exeprion.
    console.log(error);
    res.status(404).send(error);
  }
};
