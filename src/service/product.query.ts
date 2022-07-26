export const getProductsHelper =
  'SELECT * from product.products ORDER BY id ASC';

export const addProductsHelper = `INSERT INTO product.products (name, brandId, categoryId, subCategoryId, qty, mrp1, mrp2, mrp3, igst, cgst, sgst )
  VALUES ('$name', '$brandId', '$categoryId', '$subCategoryId', '$qty', '$mrp1', '$mrp2', '$mrp3', '$igst', '$cgst', '$sgst')`;
