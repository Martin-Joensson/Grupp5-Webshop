"use server";

import { revalidatePath } from "next/cache";
import {
  ProductUncheckedCreateInputObjectSchema,
  ProductUpsertOneZodSchema,
} from "../prisma/generated/schemas";
import z from "zod";
import { upsertProduct } from "./lib/api";

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
  const id = rawData.productId ?? 0;
  const validatedProduct =
    ProductUncheckedCreateInputObjectSchema.safeParse(rawData);
  console.log("VALIDATED PRODUCT DATA", validatedProduct.data);
  console.log("VALIDATED PRODUCT ERROR", validatedProduct.error);
  if (!validatedProduct.success) {
    const flattened = z.flattenError(validatedProduct.error);

    const state = {
      status: "error",
      message: "Please fix errors in form.",
      errors: flattened.fieldErrors,
      rawData,
      timestamp: Date(),
    };
    console.log("RETURN FAILED VALIDATION", state.message, state.errors);
    return; //return state;
  }
  console.log("ID", id);
  const validatedUpsert = ProductUpsertOneZodSchema.safeParse({
    where: { id: id },
    create: validatedProduct.data,
    update: validatedProduct.data,
  });

  if (!validatedUpsert.data) {
    console.log("RETURN FAILED UPSERT VALIDATION", validatedUpsert.error);
    return;
  }
  console.log("VALIDATED UPSERT", validatedUpsert);

  try {
    await upsertProduct(validatedUpsert.data);
    revalidatePath("/admin");
    const state = {
      status: "success",
      message: "Product created/edited successfully.",
      timestamp: Date(),
    };
    console.log("RETURN SUCCESSFUL UPSERT", state.message);
    return; //return state;
  } catch (e) {
    const state = {
      status: "error",
      message: "There was a problem submitting your request. Please try later.",
      rawData,
      timestamp: Date(),
    };
    console.log("RETURN FAILED UPSERT", state.message, e);
    return; //return state;
  }
}
