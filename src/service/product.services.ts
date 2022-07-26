// Connections.
import { POOL } from '@/config/database/connection';
// Interfaces.
import { GetAllProducts } from './products';
import { SuccessResponse } from '@/common/response';
// Query
import { getProductsHelper, addProductsHelper } from './product.query';

import CONFIG from '@/config';

/**
 * @method - To get all products.
 * @returns  - OBJ product details.
 */
export const addProducts = async (data: any): Promise<SuccessResponse> => {
  try {
    let statement = addProductsHelper
      .replace('$name', data.name)
      .replace('$brandId', data.brandId)
      .replace('$categoryId', data.categoryId)
      .replace('$subCategoryId', data.subCategoryId)
      .replace('$qty', data.qty)
      .replace('$mrp1', data.mrp1)
      .replace('$mrp2', data.mrp2)
      .replace('$mrp3', data.mrp3)
      .replace('$igst', data.igst)
      .replace('$cgst', data.cgst)
      .replace('$sgst', data.sgst);

    const result = await POOL.query(statement);
    console.log('result--------', result);
    if (result && result.rowCount === 0) {
      throw 'Failed to insert data to product table!';
    }
    return {
      code: 200,
      message: 'Successfuly to insert data to product table!',
    };
  } catch (error) {
    return { code: 404, message: error };
  }
};

/**
 * @method - To get all products.
 * @returns  - OBJ product details.
 */
export const getProducts = async (): Promise<GetAllProducts | null> => {
  try {
    let statement = getProductsHelper;
    const result = await POOL.query(statement);

    if (result && result.rows.length > 0) {
      return Promise.resolve(result.rows);
    }
    throw new Error('No data found');
  } catch (error) {
    return error;
  }
};
