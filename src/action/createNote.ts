"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

// POST data (create data - mutation)
export async function createNote(_state: unknown, formData: FormData) {
  const content = formData.get("content");

  const data = await prisma.note.create({
    data: {
      content: content as string,
    },
  });

  revalidatePath("/");

  return { resetKey: data.id, message: "created success" };
}
