import prisma from "@/utils/prisma";
import Link from "next/link";
import { CreateNote } from "@/components/CreateNote";
import { DeleteNote } from "@/components/DeleteNote";

export default async function Home() {
  // GET data
  const allNotes = await prisma.note.findMany();

  return (
    <main className="max-w-lg m-auto space-y-4 my-4">
      <h1>Notes</h1>
      <CreateNote />
      <div>
        {allNotes.map((note) => {
          return (
            <div key={note.id}>
              <div>{note.content}</div>
              <div className="flex gap-2">
                <DeleteNote id={note.id} />
                <Link href={`/${note.id}`}>
                  <button className="bg-slate-100 text-slate-400 text-xs font-medium px-2 py-1 rounded-lg">
                    Update
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
