"use server";

import { revalidatePath } from "next/cache";
import z from "zod";
import { upsertProduct } from "./lib/api";
import { ProductUncheckedCreateInputObjectSchema } from "../prisma/generated/schemas";

const API_URL = "http://localhost:4000";

export async function deleteProduct(id: number) {
  const request = new Request(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });

  const response = await fetch(request);

  if (!response.ok) {
    return {
      message: `The product could not be deleted due to the following error: ${response.status} ${response.statusText}`,
    };
  }

  revalidatePath("/admin");
}

export async function addProductAction(formData: FormData) {
  const rawData = Object.fromEntries(formData);
  const id = rawData.id ? Number(rawData.id) : 0;

  const validatedProduct =
    ProductUncheckedCreateInputObjectSchema.safeParse(rawData);

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
