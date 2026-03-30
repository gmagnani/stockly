"use server";

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { createProductSchema, CreateProductSchema } from "./schema";

export const createProduct = async (data: CreateProductSchema) => {
  createProductSchema.parse(data);
  await db.product.create({
    data: {
      name: data.name,
      price: data.price,
      stock: data.stock,
    },
  });
  revalidatePath("/products", "page");
};
