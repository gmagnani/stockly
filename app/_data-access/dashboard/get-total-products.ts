import "server-only";

import { db } from "@/lib/prisma";

export const getTotalProducts = async (): Promise<number> => {
  return db.product.count();
};