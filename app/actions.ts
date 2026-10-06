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

export async function addProductAction(formData: FormData) {
  const rawData = Object.fromEntries(formData);
  const id = rawData.id ? Number(rawData.id) : 0;

  const validatedProduct = ProductUpsertSchema.safeParse(rawData);

  if (!validatedProduct.data) {
    const flattened = z.flattenError(validatedProduct.error);

    const state = {
      status: "error",
      message: "Please fix errors in form.",
      errors: flattened.fieldErrors,
      rawData,
      timestamp: Date(),
    };
    return; //return state;
  }

  try {
    await upsertProduct({
      where: { id: id },
      create: validatedProduct.data,
      update: validatedProduct.data,
    });

    revalidatePath("/admin");
    const state = {
      status: "success",
      message: "Product created/edited successfully.",
      timestamp: Date(),
    };
    return; //return state;
  } catch (e) {
    const state = {
      status: "error",
      message: "There was a problem submitting your request. Please try later.",
      rawData,
      timestamp: Date(),
    };
    return; //return state;
  }
}
