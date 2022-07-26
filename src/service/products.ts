/**
 * Application Information response strucuture.
 */
export interface GetAllProducts {
  id: string;
  name: string;
  barndId: string;
  categoryId: string;
  subCategoryId: string;
  qty: number;
  mrp1: number;
  mrp2: number;
  mrp3: number;
  igst: number;
  cgst: number;
  sgst: number;
  isActive: boolean;
}
