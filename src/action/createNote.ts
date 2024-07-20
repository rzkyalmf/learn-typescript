"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const contentSchema = z.object({
  content: z.string().min(5, { message: "min 5 character" }),
});

// POST data (create data - mutation)
export async function createNote(_state: unknown, formData: FormData) {
  const content = formData.get("content");

  const contentValidation = contentSchema.safeParse({ content });
  // console.log (contentValidation);

  if (!contentValidation.success) {
    return { resetKey: "", message: contentValidation.error.errors[0].message };
  }

  const data = await prisma.note.create({
    data: {
      content: content as string,
    },
  });

  revalidatePath("/");
  return { resetKey: data.id, message: "created success" };
}
