import { updateNote } from "@/action/updateNote";
import React from "react";

interface Propss {
  id: string;
  content: string | undefined;
}

export const UpdateNote: React.FC<Propss> = ({ id, content }) => {
  return (
    <>
      <h1>Update Note</h1>
      <div>
        <form action={updateNote} className="space-y-2">
          <input name="id" value={id} hidden />
          <input
            defaultValue={content}
            name="content"
            placeholder="tulis note"
          />
          <button>Update Note</button>
        </form>
      </div>
    </>
  );
};
