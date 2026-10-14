"use server";

import { revalidatePath } from "next/cache";
import z from "zod";
import { deleteProduct, upsertProduct } from "./lib/api";
import { ProductUncheckedCreateInputObjectZodSchema } from "../prisma/generated/schemas";

export async function deleteProductAction(id: number) {
  try {
    await deleteProduct(id);
  } catch {
    return {
      message: `The product could not be deleted.`,
    };
  }

  revalidatePath("/admin");
}

const ProductUpsertSchema = ProductUncheckedCreateInputObjectZodSchema.extend({
  price: z.preprocess((val) => {
    if (val === undefined || val === null) return val;
    return Math.round(Number(val) * 100);
  }, z.number().int()),
});

export async function addProductAction(formData: FormData)
{
  const rawData = Object.fromEntries(formData);
  const id = rawData.id ? Number(rawData.id) : 0;

  const validatedProduct = ProductUpsertSchema.safeParse(rawData);

  if (validatedProduct.data)
  {
    await upsertProduct({
      where: { id: id },
      create: validatedProduct.data,
      update: validatedProduct.data,
    });

    return;
  }
}