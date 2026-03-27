import "server-only";
import { db } from "@/lib/prisma";
import { Product } from "@/generated/prisma/client";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const products = await db.product.findMany();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
