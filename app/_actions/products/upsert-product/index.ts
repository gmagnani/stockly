"use server";

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { upsertProductSchema } from "./schema";
import { actionClient } from "@/lib/safe-actions";

export const upsertProduct = actionClient
  .inputSchema(upsertProductSchema)
  .action(async ({ parsedInput: data }) => {
    await db.product.upsert({
      where: { id: data.id ?? "" },
      update: {
        name: data.name,
        price: data.price,
        stock: data.stock,
      },
      create: {
        name: data.name,
        price: data.price,
        stock: data.stock,
      },
    });
    revalidatePath("/products", "layout");
  });
