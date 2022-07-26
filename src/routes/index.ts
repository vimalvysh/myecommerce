import * as homeController from '@/controller/home';
import * as productController from '@/controller/products.controller';

import { Router } from 'express';

const router = Router();
const PRODUCT_ROUTE = 'products';

router.get(`/${PRODUCT_ROUTE}`, productController.getProducts);
router.post(`/${PRODUCT_ROUTE}`, productController.addProducts);

export default router;
