import "server-only";
import { db } from "@/lib/prisma";
import { Product } from "@/generated/prisma/client";
import { unstable_cache } from "next/cache";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const products = await db.product.findMany();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const cashedGetProducts = unstable_cache(getProducts, ["getProducts"], {
  tags: ["get-products"],
  revalidate: 60,
});