"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

// DELETE data (delete data - mutation)
export async function deleteNote(formData: FormData) {
  const id = formData.get("id");

  await prisma.note.delete({
    where: {
      id: id as string,
    },
  });

  revalidatePath("/");
}
