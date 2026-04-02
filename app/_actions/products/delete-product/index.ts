"use server";

import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { deleteProductSchema } from "./schema";
import { actionClient } from "@/lib/safe-actions";

export const deleteProduct = actionClient
  .inputSchema(deleteProductSchema)
  .action(async ({ parsedInput: { id } }) => {
    await db.product.delete({
      where: {
        id,
      },
    });
    revalidatePath("/products", "page");
  });
