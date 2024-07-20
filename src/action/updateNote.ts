"use server";

import prisma from "@/utils/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";

const contentSchema = z.object({
  content: z.string().min(5, { message: "min 5 character" }),
  id: z.string(),
});

export async function updateNote(_state: unknown, formData: FormData) {
  const id = formData.get("id");
  const content = formData.get("content");

  const contentValidation = contentSchema.safeParse({ content, id });
  // console.log(contentValidation);

  if (!contentValidation.success) {
    return { errors: contentValidation.error.flatten().fieldErrors };
  }

  await prisma.note.update({
    where: {
      id: id as string,
    },
    data: {
      content: content as string,
    },
  });

  redirect("/");
}
