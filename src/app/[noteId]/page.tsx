import { UpdateNote } from "@/components/UpdateNote";
import prisma from "@/utils/prisma";
import React from "react";

interface Props {
  params: {
    noteId: string;
  };
}

export default async function Page({ params }: Props) {
  const { noteId } = params;

  const note = await prisma.note.findFirst({
    where: {
      id: noteId,
    },
  });

  return (
    <main className="m-auto my-12 max-w-lg">
      <UpdateNote id={noteId} content={note?.content} />
    </main>
  );
}
